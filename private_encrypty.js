const NodeRSA = require('node-rsa')
const fs = require('fs')
const path = require('path')
const keyData = fs.readFileSync(path.join(__dirname, './private_key.pem'), 'utf8');
console.log('keyData', keyData);

function encryptPrivate(encryData) {
    let pkcsType = 'pkcs8';
    const key = new NodeRSA({ b: 2048 });
    key.importKey(keyData, pkcsType + '-private-pem');
    const encrypted = key.encryptPrivate(encryData, 'base64', 'utf8');
    console.log('使用私钥加密后的数据：', encrypted);
    return encrypted;
}
encryptPrivate('123');