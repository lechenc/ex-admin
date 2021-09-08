/*
 * @Author: your name
 * @Date: 2020-04-17 14:30:47
 * @LastEditTime: 2020-12-19 15:38:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \alphawallet-bg\.prettierrc.js
 */
module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  jsxBracketSameLine: false, //使多行JSX元素最后一行末尾的 > 单独一行
  printWidth: 100,
  semi: false,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'none',
  proseWrap: 'never',
  formatOnSave: false,
  eslintIntegration: false,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ]
}
