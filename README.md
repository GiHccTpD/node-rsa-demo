```shell
➜  rsa (main) ✗ node private_encrypty.js
使用私钥加密后的数据： osSPLHw5xLLBJtyN08k6DL8sI94lI6lALDaMVCMk5ERj9KSc/lZyWvjOEwi1cn/kWfYXeRujFFJRE0KV4bot4ApGNpnFgvNAZ2wf0WnNbWQOC7PSxie/OQsc0BiawbXn9a5F6Oiz+dj4RQNauHVo3Yvwer8anyWg2pSid1Bzf0ACQXR6lKGfhR5Pqa7JprGDz/QeRq4m5+6B4ZAT5OYkx9vyGzaAvNeFdhaYcar3vfeZ1nW7L9AYMaGvp4RUi31wSV+tciiRZ+7uHvs8Lu9XSUcDx8MlQJlYQbotaqDfsWDpmU9aBgpDKQXx+qoJ7MYuNudQYFCpBT7Kq9RIh+9S8g==
rsa-en: 2.291s
➜  rsa (main) ✗ node public_decrypty.js 
keyData -----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxT2bN35+va7XWIpFgrNu
soy1BcLmm71LmMeT7TUkav7oY2lxWOlF1StEpJ7ExShg3Gr84emoMzkZM9mpewc1
nC8+d4VLlW3MQRlDwaR5qVKzRsOk3AL4+20nt1KBAB8sc1tq/3b6EuoWRUVKCjvR
rv9HhBb9/CBjmOtU2+mG9BS1CTyBPDsQut2UoKnfeWjlcLbipeHp7//gWnWpTps3
H5iA6R3IEBJGPD+/pZckBnma7xc/w44/ezHIz+VGs4YRCnE/zfrJFC3S5rNDmoQS
gC6MyWNfDYRCC6Z4QZo93BxOY4f/Mz5JpeKVoOipvJATs/yUeD/6eku60eJLeyTG
DQIDAQAB
-----END PUBLIC KEY-----

使用公钥解密后的数据： 123
rsa-de: 680.556ms
```