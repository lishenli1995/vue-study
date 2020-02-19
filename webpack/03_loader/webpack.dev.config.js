module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        filename: './build.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader?limit=3000'
            }
        ]
    }
}