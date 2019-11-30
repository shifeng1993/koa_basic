import os from 'os';
import fs from 'fs';
import path from 'path';

export default class utils {
  static getIPV4() {
    let interfaces = os.networkInterfaces();
    let ip = '';
    for (let devName in interfaces) {
      Array.isArray && interfaces[devName].forEach((alias) => {
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1') {
          ip = alias.address;
        }
      })
    }
    return ip
  }
  static readFileList(dir: any, filesList: string[] = []) {
    const files = fs.readdirSync(dir);
    files.forEach((item, index) => {
      let fullPath: string = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        utils.readFileList(path.join(dir, item), filesList);  //递归读取文件
      } else {
        filesList.push(fullPath);
      }
    });
    return filesList;
  }

  static transformField(str: string) {
    let newstr = '';
    if (/\_/g.test(str)) {
      // 如果是下划线写法，则转化成驼峰 
      newstr = str.split('_').map((char, index) => (index === 0 ? char : char.slice(0, 1).toUpperCase() + char.slice(1))).join('');
    } else {
      // 如果是驼峰则转成下划线 
      newstr = str.replace(/[A-Z]/g, (...args) => (`_${args[0].toLowerCase()}`));
    }
    return newstr;
  }
}