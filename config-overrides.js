const {
    override,
    setWebpackPublicPath,
    overrideDevServer,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    setWebpackOptimizationSplitChunks,
    addWebpackModuleRule,
    adjustStyleLoaders,
    addWebpackPlugin,
} = require('customize-cra');

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'production';
const isPrd = nodeEnv === 'production';

module.exports = {
    webpack: override(
        setWebpackPublicPath(
            process.env.NODE_ENV === 'production'
                ? `${'https://qn.lauginwing.top/'}`
                : '/'
        ),

        // 分包
        setWebpackOptimizationSplitChunks({
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors',
                    minChunks: 2,
                },
                iconFont: {
                    test(module) {
                        if (
                            module.resource &&
                            module.resource.includes('src/components/IconFont/')
                        ) {
                            return true;
                        }
                        return false;
                    },
                    priority: -5,
                    name: 'iconFont',
                },
            },
        }),

        // https://www.npmjs.com/package/babel-plugin-import
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),

        addWebpackAlias({
            '@/config': path.resolve(__dirname, 'src/config'),
            '@/api': path.resolve(__dirname, 'src/api'),
            '@/router': path.resolve(__dirname, 'src/router'),
            '@/pages': path.resolve(__dirname, 'src/pages'),
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/common': path.resolve(__dirname, 'src/common'),
            '@/store': path.resolve(__dirname, 'src/store'),
            '@/assets': path.resolve(__dirname, 'src/assets'),
            '@/style': path.resolve(__dirname, 'src/style'),
        }),

        adjustStyleLoaders((loader) => {
            const {
                use: [, css],
            } = loader;
            if (css.options.modules) {
                // 修改css-module的类名生成规则
                css.options.modules.localIdentName =
                    '[folder]__[local]--[hash:base64:5]';
                delete css.options.modules.getLocalIdent;
            }

            const sassLoader = loader.use.find((i) => {
                if (!i.loader) {
                    return false;
                }

                if (i.loader.match('sass-loader')) {
                    return true;
                }

                return false;
            });

            if (sassLoader) {
                // 在每个sass文件顶部注入代码
                sassLoader.options.additionalData =
                    "@import './src/style/base/base.scss';";
            }
        }),

        // WebpackCdnPlugin
        addWebpackPlugin(
            new WebpackCdnPlugin({
                modules: [
                    {
                        name: 'axios',
                        var: 'axios',
                        path: isPrd ? 'axios.min.js' : 'axios.js',
                    },
                    {
                        name: 'react',
                        var: 'React',
                        path: isPrd
                            ? 'umd/react.production.min.js'
                            : 'umd/react.development.js',
                    },
                    {
                        name: 'react-dom',
                        var: 'ReactDOM',
                        path: isPrd
                            ? 'umd/react-dom.production.min.js'
                            : 'umd/react-dom.development.js',
                    },
                    {
                        name: 'react-router-dom',
                        var: 'ReactRouterDOM',
                        path: isPrd
                            ? 'react-router-dom.min.js'
                            : 'react-router-dom.js',
                    },
                    {
                        name: 'mobx',
                        var: 'mobx',
                        path: isPrd
                            ? 'mobx.umd.production.min.js'
                            : 'mobx.umd.development.js',
                    },
                    {
                        name: 'mobx-react-lite',
                        var: 'mobxReactLite',
                        path: isPrd
                            ? 'mobxreactlite.umd.production.min.js'
                            : 'mobxreactlite.umd.development.js',
                    },
                ],
                prodUrl: '//cdn.staticfile.org/:name/:version/:path',
            })
        ),

        // 打包资源缓存，大大提高打包速度
        nodeEnv === 'production' &&
            addWebpackPlugin(new HardSourceWebpackPlugin()),
        // 打包分析，生成html到dist/report.html
        addWebpackPlugin(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
                // reportFilename: 'report.html',
            })
        )
    ),

    // 配置请求代理
    // devServer: overrideDevServer((config) => {
    //     const proxy = config.proxy || {}
    //     return {
    //         ...config,
    //         proxy: {
    //             ...proxy,
    //             '/api': {
    //                 target: 'https://bm-dev.meimeifa.cn',
    //                 secure: false,
    //                 changeOrigin: true,
    //             },
    //         },
    //     }
    // }),
};
