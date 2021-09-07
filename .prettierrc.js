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
  jsxBracketSameLine: false,
  printWidth: 300,
  semi: false,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'none',
  proseWrap: 'never',
  formatOnSave: false,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ]
};
