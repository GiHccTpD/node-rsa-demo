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

RsaDecryptPublic('DmW+RKf7gjdmkJvH6iV1nCR+6Yaa8C2Vk5A7F0LgYj0bfveoRIWp1Zt5Z6Ni58sSLCsBuKoRvApTVMSwyoMjAn+UNxbEXqxN43trEXOPC+zBaPyQDOfVhd0r5KP8IVgsrkS/V4j1VpjSXZwMJFkbRpwtUFPxtaK0DwFf3fWYOdWt4Nv6gYG1tdHM+eBRc+gOUw8Q/iKTnGI+akI2U1ACioBvhyprQW2yumFy4JFubQTDVIm7wfMiN4sIU6WILbYgvrnmysWCvS0ij4JdTC0A7zE1ri1MUMm16slNiZxBvVs7+qHsW+D2iaxVfKOQYSuB/mMRHX5uQ9LoR/L6V1dgLA==');
