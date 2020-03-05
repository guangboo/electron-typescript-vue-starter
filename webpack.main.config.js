module.exports = {
    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: './app/main/index.ts',

    // resolve: {
    //     // Add `.ts` and `.tsx` as a resolvable extension.
    //     extensions: [".ts", ".tsx", ".js"]
    // },

    // Put your normal webpack config below here
    module: {
        rules: require('./webpack.rules'),
    },

    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
};
