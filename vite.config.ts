export default {
  proxy: {
    "/graphql": {
      target: "http://localhost:8080/query",
      changeOrigin: true,
      ignorePath: true,
    },
  },
  optimizeDeps: {
    include: ["graphql-tag"],
    exclude: [],
  },
}
