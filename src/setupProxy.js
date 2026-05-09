const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/omdb",
    createProxyMiddleware({
      target: "https://www.omdbapi.com",
      changeOrigin: true,
      pathRewrite: (path, req) => {
        const apiKey =
          process.env.OMDB_API_KEY || process.env.REACT_APP_OMDB_API_KEY;

        if (!apiKey) {
          return "/?s=__missing_api_key__";
        }

        const originalUrl = new URL(req.originalUrl, "http://localhost");
        originalUrl.searchParams.set("apikey", apiKey);

        return `/?${originalUrl.searchParams.toString()}`;
      },
      onProxyRes(proxyRes) {
        proxyRes.headers["cache-control"] = "no-store";
      },
    }),
  );
};
