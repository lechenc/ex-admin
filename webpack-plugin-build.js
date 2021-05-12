/*
 * @Author: your name
 * @Date: 2020-09-09 10:44:42
 * @LastEditTime: 2020-09-28 23:25:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\webpack-plugin-build.js
 */
const fs = require('fs');
const path = require('path');
const file = 'version.js';
const versionFile = path.resolve(__dirname, file);

class WebpackPluginBuild {
  apply (compiler) {
    const model = process.env.BABEL_ENV;
    //console.log('\x1B[36m%s\x1B[0m', `当前版本: ${model}`);
    compiler.hooks.done.tap('done', async () => {
      let versionText = '1.0.1_08/17/00';
      if (exists(versionFile)) {
        versionText = fs.readFileSync(versionFile, 'utf-8').toString().replace(/\s|\n|\t/g, '').replace(/_[a-z]+$/i, '');
        try {
          fs.unlinkSync(versionFile);
        } catch (e) {
          console(e);
        }
      }
      let dateTimes = +versionText.replace(/.*\//g, '') + 1 + ''; // 当天第几次
      //console.log('versionText', versionText);
      const lastDate = versionText.replace(/.*_|\/\d+$/g, '');
      versionText = versionText.replace(/_.*$/, '');
      const date = (new Date()).toISOString().replace(/^\d{4}-|T.*$/g, '').replace(/-/g, '/');
      let version = +versionText.replace(/\./g, '');
      //console.log(lastDate, date);
      if (lastDate.replace(/[^\d]/g, '') !== date.replace(/[^\d]/g, '')) {
        version++;
        dateTimes = 1;
      }
      versionText = version.toString().replace(/(\d{1})$/, '.$1').replace(/(\d{1}\.\d{1})/, '.$1');
      //console.log('model ->', model)
      const writeText = `${versionText}_${date}/${dateTimes.toString()[1] ? dateTimes : '0' + dateTimes.toString()}_${model === 'production' ? 'pro' : 'dev'}`;
      fs.writeFileSync(versionFile, writeText);
      fs.writeFileSync(path.resolve(__dirname, 'dist/' + file), writeText);

    });
  }
}

function exists (pathDir) {
  try {
    fs.accessSync(pathDir);
  } catch (e) {
    return false;
  }
  return true;
}

// 拷贝文件
function copyfile(oldPath, newPath) {
  return new Promise((resolve, reject) => {
    var stat = fs.lstatSync(oldPath);
    if (stat.isDirectory()) {
      return false;
    }
    var readStream = fs.createReadStream(oldPath);
    var writeStream = fs.createWriteStream(newPath);
    readStream.pipe(writeStream);
    readStream.on('end', function () {
      resolve(true);
    });
    readStream.on('error', function () {
      reject();
    });
  })
}

function deleteFolder(path) {
  return new Promise((resolve, reject) => {
    var files = [];
    if (fs.existsSync(path)) {
      files = fs.readdirSync(path);
      files.forEach(async (file) => {
        var curPath = path + '/' + file;
        if (fs.statSync(curPath).isDirectory()) {
          await deleteFolder(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
      resolve();
    } else {
      resolve();
    }
  })
}

module.exports = WebpackPluginBuild;
