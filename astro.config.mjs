import { defineConfig } from "astro/config";
export default defineConfig({
  i18n: {
    locales: ["en", "es", "de", "fr", "ru", "zh", "ar", "ja", "ko", "pt", "tr", "hi", "bn"],
    defaultLocale: "en",
    routing: "manual"
}
});