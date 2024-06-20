import { configureLocalization } from '@lit/localize';
export const { setLocale } = configureLocalization({
  sourceLocale: 'en',
  targetLocales: ['fr'],
  loadLocale: async (locale) =>
    await import(/* webpackMode: "eager" */ '../locales/' + locale),
});
