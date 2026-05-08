import { useState, useEffect, useRef } from "react";

const MIN_QUERY_LENGTH = 3;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [error, setError] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const activeQueryRef = useRef("");
  const pageCacheRef = useRef(new Map());

  useEffect(() => {
    const normalizedQuery = query.trim();

    if (normalizedQuery.length < MIN_QUERY_LENGTH) {
      setMovies([]);
      setError("");
      setTotalResults(0);
      setPage(1);
      activeQueryRef.current = "";
      pageCacheRef.current.clear();
      return;
    }

    if (activeQueryRef.current !== normalizedQuery) {
      activeQueryRef.current = normalizedQuery;
      pageCacheRef.current.clear();
      setMovies([]);
      setPage(1);
    }
  }, [query]);

  useEffect(() => {
    const normalizedQuery = query.trim();

    if (normalizedQuery.length < MIN_QUERY_LENGTH) return;

    const controller = new AbortController();
    const requestKey = `${normalizedQuery}:${page}`;
    const cached = pageCacheRef.current.get(requestKey);

    async function fetchMovies() {
      try {
        setError("");
        if (page === 1) setIsLoading(true);
        else setIsFetchingMore(true);

        const data =
          cached ??
          (await fetch(
            `/api/omdb?s=${encodeURIComponent(normalizedQuery)}&page=${page}`,
            { signal: controller.signal },
          ).then((res) => {
            if (!res.ok) {
              throw new Error("Something went wrong with fetching movies");
            }
            return res.json();
          }));

        pageCacheRef.current.set(requestKey, data);

        if (data.Response === "False") throw new Error(data.Error || "Movie not found");

        const incomingMovies = data.Search ?? [];
        const total = Number(data.totalResults || 0);

        setTotalResults(total);
        setMovies((prev) => {
          if (page === 1) return incomingMovies;
          const merged = [...prev, ...incomingMovies];
          const unique = new Map(merged.map((movie) => [movie.imdbID, movie]));
          return Array.from(unique.values());
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
        setIsFetchingMore(false);
      }
    }

    fetchMovies();

    return () => controller.abort();
  }, [query, page]);

  const hasMore = movies.length < totalResults;

  function loadMore() {
    if (isLoading || isFetchingMore || !hasMore) return;
    setPage((current) => current + 1);
  }

  return { movies, isLoading, isFetchingMore, error, totalResults, hasMore, loadMore };
}
