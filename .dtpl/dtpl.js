// 这是同目录下 dtpl.ts 编译后的文件，如果不熟悉语法，建议修改 dtpl.ts 文件
// 然后用 tsc 把 dtpl.ts 编译到 dtpl.js

var path = require('path')
module.exports = function (source) {
    return {
        templates: [
            {
                name: 'template/example',
                matches: '*-example',
                filter: function (target) {
                    var dir = path.dirname(target.toPath);
                    if (path.basename(dir) === 'config') {
                        return {
                            filePath: path.resolve(dir, '..', '..', target.name)
                        };
                    }
                    return true;
                },
                overwrite: false
            },
            {
                name: 'template/widget.tsx.dtpl',
                matches: '*-example/widget/**/*.tsx'
            },
            {
                name: 'template/page.tsx.dtpl',
                matches: '*-example/page/**/*.tsx',
                related: function (data) {
                    var styleFile = './style/' + data.fileName + '.css';
                    return {
                        relativePath: styleFile,
                        reference: "require('" + styleFile + "')",
                        smartInsertStyle: true
                    };
                }
            },
            {
                name: 'template/page.css.dtpl',
                matches: '*-example/page/**/*.css'
            },
            {
                name: 'component',
                matches: function (miniMatch, source) {
                    if (!source.isDirectory) {
                        return false
                    }

                    const { rawModuleName, relativeFilePath } = source.basicData
                    // 如果是小写开头的文件夹，不生成
                    if (/^[a-z]/.test(rawModuleName)) {
                        return false
                    }

                    if (
                        !relativeFilePath.startsWith('src/pages/') &&
                        !relativeFilePath.startsWith('src/components')
                    ) {
                        return false
                    }

                    return true
                }
            }
        ],
        globalData: {
            projectName: 'dtpl'
        }
    };
}
