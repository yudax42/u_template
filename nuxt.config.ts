export default defineNuxtConfig({
  build: {
    transpile: ["vue-notion"],
  },
  telemetry: false,
  target: "static",
});
