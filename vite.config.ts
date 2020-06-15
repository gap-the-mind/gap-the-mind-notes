export default {
  proxy: {
    "/graphql": {
      target: "https://gitlab.com/api/graphql",
      changeOrigin: true,
      ignorePath: true,
    },
  },
}
