const NodeRSA = require('node-rsa')
const fs = require('fs')
const path = require('path')
const keyData = fs.readFileSync(path.join(__dirname, './public_key.pem'), 'utf8');
console.log('keyData', keyData);

function RsaDecryptPublic(encryData) {
  let pkcsType = 'pkcs8';
  const key = new NodeRSA({ b: 2048 });
  key.importKey(keyData, pkcsType + '-public-pem');
  const decrypted = key.decryptPublic(encryData, 'utf8');
  console.log('使用公钥解密后的数据：', decrypted);
  return decrypted;
}

console.time('rsa-de')
RsaDecryptPublic('osSPLHw5xLLBJtyN08k6DL8sI94lI6lALDaMVCMk5ERj9KSc/lZyWvjOEwi1cn/kWfYXeRujFFJRE0KV4bot4ApGNpnFgvNAZ2wf0WnNbWQOC7PSxie/OQsc0BiawbXn9a5F6Oiz+dj4RQNauHVo3Yvwer8anyWg2pSid1Bzf0ACQXR6lKGfhR5Pqa7JprGDz/QeRq4m5+6B4ZAT5OYkx9vyGzaAvNeFdhaYcar3vfeZ1nW7L9AYMaGvp4RUi31wSV+tciiRZ+7uHvs8Lu9XSUcDx8MlQJlYQbotaqDfsWDpmU9aBgpDKQXx+qoJ7MYuNudQYFCpBT7Kq9RIh+9S8g==');
console.timeEnd('rsa-de')
