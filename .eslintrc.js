module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
        // - 启用了eslint-plugin-prettier插件
        // - 设置了"prettier/prettier"规则为"error"
        // - 继承了eslint-config-prettier配置
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true, // 字符串是否使用单引号而不是双引号
                tabWidth: 4, // 指定每个缩进的空格数量
                semi: true, // 语句行尾是否添加分号
                jsxBracketSameLine: false, // 是否将>放置在多行 JSX 元素最后一行的结尾，而不是放在下一行
            },
        ],
    },
};
