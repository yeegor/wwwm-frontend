const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const projectRoot = path.resolve(__dirname, '..', '..');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    entry: path.join(projectRoot, 'src', 'app', 'index.js'),
    
    output: {
        path: path.join(projectRoot, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(projectRoot, 'assets', 'index.html')
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ],
    
    resolve: {
        alias: {
            Route: path.resolve(projectRoot, 'src', 'app', 'route'),
            Component: path.resolve(projectRoot, 'src', 'app', 'component'),
            Style: path.resolve(projectRoot, 'src', 'app', 'style')
        },
        extensions: ['.js', '.scss']
    },
    
    devServer: {
        watchContentBase: true,
        historyApiFallback: true
    }
};
