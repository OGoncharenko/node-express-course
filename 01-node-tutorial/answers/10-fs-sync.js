const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./temporary/fileA.txt', 'utf8');
const second = readFileSync('./temporary/fileB.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './temporary/result-sync.txt',
    `Here is the result of sync : ${first}, ${second}`, { flag: 'a' }
)