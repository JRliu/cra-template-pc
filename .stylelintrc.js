/**
 * stylelint 配置
 */

module.exports = {
    ignoreFiles: ['node_modules/**/*.scss'],
    extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
    plugins: ['stylelint-order'],
    rules: {
        'color-hex-length': null,
        'value-keyword-case': null,
        'max-empty-lines': 1,
        indentation: 4,
        // 字符串使用双引号
        'string-quotes': 'single',
        // 使用了 autoprefix 不需要前缀
        'selector-type-no-unknown': null,
        'selector-pseudo-element-colon-notation': null,
        'declaration-block-trailing-semicolon': null,
        'selector-pseudo-class-no-unknown': null,
        'number-leading-zero': null,
        'at-rule-no-unknown': null,
        'font-family-no-missing-generic-family-keyword': null,
        'no-descending-specificity': null,
        'function-name-case': null,
        // 属性顺序
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes']
            }
        ],
        // 属性顺序
        // 'order/order': [
        //     'dollar-variables',
        //     'custom-properties',
        //     'at-rules',
        //     'declarations',
        //     'rules'
        // ],
        // 'order/properties-order': [
        //     'display',
        //     'float',
        //     'position',
        //     {
        //         order: 'flexible',
        //         properties: ['left', 'top', 'right', 'bottom']
        //     },
        //     'width',
        //     'height',
        //     {
        //         order: 'flexible',
        //         properties: [
        //             'min-width',
        //             'max-width',
        //             'min-height',
        //             'max-height',
        //             'line-height'
        //         ]
        //     },
        //     'padding',
        //     {
        //         order: 'flexible',
        //         properties: [
        //             'padding-left',
        //             'padding-top',
        //             'padding-right',
        //             'padding-bottom'
        //         ]
        //     },
        //     'margin',
        //     {
        //         order: 'flexible',
        //         properties: [
        //             'margin-left',
        //             'margin-top',
        //             'margin-right',
        //             'margin-bottom'
        //         ]
        //     },
        //     'border',
        //     {
        //         order: 'flexible',
        //         properties: [
        //             'border-left',
        //             'border-top',
        //             'border-right',
        //             'border-bottom',
        //             'border-radius'
        //         ]
        //     },
        //     'background',
        //     {
        //         order: 'flexible',
        //         properties: [
        //             'background-image',
        //             'background-position',
        //             'background-repeat',
        //             'background-size',
        //             'background-color'
        //         ]
        //     },
        //     'color',
        //     {
        //         order: 'flexible',
        //         properties: ['font-weight', 'font-size']
        //     },
        //     {
        //         order: 'flexible',
        //         properties: ['text-align']
        //     }
        // ]
    }
}
