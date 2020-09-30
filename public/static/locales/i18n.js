const NextI18Next = require('next-i18next').default;
const path = require('path')
const NextI18NextInstance = new NextI18Next({
    // browserLanguageDetection: false,
    // serverLanguageDetection: false,
    // load: 'all',
    // // defaultLanguage: 'en',
    // fallbackLng: 'en',
    // localePath: path.resolve('./public/static/locales'),
    // ignoreRoutes: ['/.next', '/static', '/public'], // note that we have to redefine ignoreRoutes
    localeSubpaths: {
        'en': 'en',
        'tw': 'tw',
        // fr: 'fr',
    },
    otherLanguages: ['tw'],
    localePath: path.resolve('./public/static/locales')
});
module.exports = NextI18NextInstance;
