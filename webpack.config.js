const LoadablePlugin = require('@loadable/webpack-plugin')
module.exports = {
    // ...
    plugins: [new LoadablePlugin()],
    module: {
        rule: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'], // The orders are important
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
}