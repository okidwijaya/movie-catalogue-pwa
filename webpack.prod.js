/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable array-bracket-spacing */
/* eslint-disable eol-last */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            }, ],
        }, ],
    },
});