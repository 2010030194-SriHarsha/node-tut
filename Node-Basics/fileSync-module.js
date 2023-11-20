const file = require('fs')
const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
// console.log(first,second);

writeFileSync('./content/result-Sync.txt',`Here is the result file: ${first},${second}`)