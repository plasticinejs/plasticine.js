var path    = require('path'),
    pack    = require(path.resolve(__dirname, 'package.json'));

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context : path.resolve(__dirname, 'src'),
    entry   : './bootstrap',
    output  : {
        path            : path.resolve(__dirname, 'build'),
        filename        : 'gh-pages.js'
    },
    module : {
        loaders : [{
            test    : /\.jsx?$/,
            exclude : [
                path.resolve(__dirname, 'node_modules')
            ],
            loader  : 'babel',
            query   : {
                presets: [
                    'react',
                    'es2015'
                ]
            }
        }, {
            test    : /\.(pcss|css)$/,
            loader  : ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader')
        }]
    },
    plugins : [
        new ExtractTextPlugin('gh-pages.css')
    ],
    postcss: function () {
        return {
            defaults: [
                require('postcss-nested')
            ],
            production:  []
        };
    },
    resolve : {
        alias : {

        },
        packageMains : [
            'index',
            'main'
        ],
        modulesDirectories : [
            'node_modules'
        ],
        extensions : [
            '',
            '.js',
            '.pcss'
        ]
    },
    resolveLoader : {
        modulesDirectories : [
            'node_modules'
        ]
    },
    bail    : true,
    devtool : 'source-map'
};