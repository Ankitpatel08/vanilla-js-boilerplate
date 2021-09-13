const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const apps = ['global', 'home', 'contact', 'aboutus'];
const COPY_ARRAY = [];

const config = {
    entry: {},
    mode: 'development',
};

COPY_ARRAY.push({
    from: path.resolve(__dirname, 'src/common/fonts/'),
    to: path.resolve(__dirname, 'dist/common/fonts/'),
});

COPY_ARRAY.push({
    from: path.resolve(__dirname, 'src/common/images/'),
    to: path.resolve(__dirname, 'dist/common/images/'),
});

for (const i in apps) {
    config.entry[apps[i]] = ['./src/apps/' + apps[i] + '/js/' + apps[i] + '.js'];

    COPY_ARRAY.push({
        from: path.resolve(__dirname, 'src/apps/' + apps[i] + '/data/'),
        to: path.resolve(__dirname, 'dist/' + apps[i] + '/data/'),
    });

    if (apps[i] !== 'global') {
        COPY_ARRAY.push({
            from: path.resolve(__dirname, 'src/apps/' + apps[i] + '/index.html'),
            to: path.resolve(__dirname, 'dist/' + apps[i] + '/index.html'),
        });
    }
}

config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js',
},

config.module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        }, {
            test: /\.(sc|sa)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                }, {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass'),
                    },
                }],
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            }],
        }, {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            }],
        },
    ],
};

config.plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name]/[name].css',
    }),
];

config.plugins.push(new CopyPlugin({ patterns: COPY_ARRAY }));

config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
};

module.exports = config;
