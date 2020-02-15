module.exports = {
    async exportPathMap(defaultPathMap) {
        return {
            '/': {page: '/'},
            '/ja': {page: '/[locale]', query: {locale: 'ja'}},
            '/en': {page: '/[locale]', query: {locale: 'en'}},
        };
    },
    exportTrailingSlash: true,
};
