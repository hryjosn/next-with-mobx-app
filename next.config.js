const withImages = require('next-images');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {
    'en': 'en',
    'zh-TW': 'tw',
    // fr: 'fr',
}

module.exports =
    withImages({
            trailingSlash: false,
            rewrites: async () => nextI18NextRewrites(localeSubpaths),
            publicRuntimeConfig: {
                localeSubpaths,
            },
            webpack: config => {
                config.node = {
                    fs: 'empty'
                }
                config.plugins = config.plugins || [];
                config.plugins = [
                    ...config.plugins,
                    // Read the .env file
                    new Dotenv({
                        path: path.join(__dirname, '.env'),
                        systemvars: true,
                    }),
                ];
                return config;
            },
        },
    )
;
