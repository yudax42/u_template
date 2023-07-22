export default defineNuxtConfig({
  build: {
    transpile: ["vue-notion"],
  },
  telemetry: false,
  routeRules: {
    "/*": { ssr: true },
  },
});
