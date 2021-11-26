const locale = 'en'

export default {
  locale,
  // when translation is not available fallback to that locale
  fallbackLocale: 'en',

  // availabled locales for user selection
  availableLocales: [
    {
      code: 'en',
      flag: 'us',
      name: 'English',
      file: 'en.js'
    },
    {
      code: 'zh',
      flag: 'cn',
      name: '中文',
      file: 'zh.js'
    }
  ]
}
