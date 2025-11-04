const DEFAULT_LANG = "en";

export async function getTranslations(lang = DEFAULT_LANG) {
  try {
    const module = await import(`../assets/i18n/${lang}.json`);
    return module.default;
  } catch {
    const fallback = await import(`../assets/i18n/${DEFAULT_LANG}.json`);
    return fallback.default;
  }
}
