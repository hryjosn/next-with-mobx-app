const withImages = require('next-images');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const fs = require('fs');
const localeSubpaths = {
    en: 'en',
    'zh-TW': 'tw',
    // fr: 'fr',
};
const { i18n } = require('./next-i18next.config');

module.exports = withImages({
    trailingSlash: false,

    generateBuildId: async () => {
        return fs.readFileSync('hash.txt', 'utf-8');
    },
    publicRuntimeConfig: {
        localeSubpaths,
    },
    webpack: (config) => {
        config.node = {
            fs: 'empty',
        };
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
    i18n,
});
