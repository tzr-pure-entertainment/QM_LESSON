const Promise = require('./promise.js');

const p = new Promise((resolve, reject) => {
  console.log('定时器开始执行');
  setTimeout(() => {
    resolve('aaaa');
    console.log('定时器执行结束');
  }, 2000)
})
p
  .then(data => {
    console.log(data);
  }, err => {
    console.error(err);
  })
