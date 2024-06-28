const path = require('path');
console.log(path.sep)

const filePath = path.join('./node-express-course', '/01-node-tutorial', 'answers')
console.log(filePath)

const basePath = path.basename(filePath);
console.log(basePath)

const fullPath = path.resolve(__dirname, 'node-express-course', '01-node-tutorial', 'answers');
console.log(fullPath);
