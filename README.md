### 配置webpack
基于create-react-app 的typescript 模板，使用 `react-app-rewired` 和 `customize-cra` 修改配置

### eslint + eslint-plugin-prettier 和 stylelint

### 生成icon组件
使用了iconfont的 `iconfont-h5` 包
```
yarn gen-icon
```

### 生成api代码
https://www.npmjs.com/package/@lauginwing/openapi-gen
```
yarn gen-api
```

### 生成vscode的css代码片段（语法提示）
https://www.npmjs.com/package/vscode-css-snippet-generator
```
yarn gen-css-snippet
```

### vscode打开对应组件代码
https://www.npmjs.com/package/react-dev-inspector

Ctrl + Shift ⇧ + Command ⌘ + C，vscode打开对应代码

### ci
webpack打包 -> 打包镜像

