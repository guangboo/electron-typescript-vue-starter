module.exports = {
    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: './src/main.ts',

    // resolve: {
    //     // Add `.ts` and `.tsx` as a resolvable extension.
    //     extensions: [".ts", ".tsx", ".js"]
    // },

    // Put your normal webpack config below here
    module: {
        rules: require('./webpack.rules'),
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
};
