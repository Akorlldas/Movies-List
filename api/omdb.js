export default async function handler(req, res) {
  const { s, i } = req.query;
  const apiKey = process.env.OMDB_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      Response: "False",
      Error: "Server configuration error: OMDB_API_KEY is missing",
    });
  }

  if (!s && !i) {
    return res.status(400).json({
      Response: "False",
      Error: "Missing query param. Use ?s=<keyword> or ?i=<imdbID>",
    });
  }

  const params = new URLSearchParams({ apikey: apiKey });

  if (s) params.set("s", s);
  if (i) params.set("i", i);

  try {
    const omdbRes = await fetch(
      `https://www.omdbapi.com/?${params.toString()}`,
    );
    const data = await omdbRes.json();

    return res.status(omdbRes.ok ? 200 : omdbRes.status).json(data);
  } catch (error) {
    return res.status(500).json({
      Response: "False",
      Error: "Failed to fetch OMDb from server",
    });
  }
}
