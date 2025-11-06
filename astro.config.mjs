import { defineConfig } from "astro/config";
export default defineConfig({
  i18n: {
    locales: ["en", "es", "de"],
    defaultLocale: "en",
    routing: "manual"
}
});