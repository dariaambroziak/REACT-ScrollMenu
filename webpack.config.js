//Konfiguracja Webpack
module.exports = {
    entry: "./js/project.jsx",
    output: { filename: "./js/out.js" },

    devServer: {
        inLine: true,
        contentBase: './',
        port: 3001
      },

    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2' , 'react'] }
            }
        ]
    }
}
