const fs = require('fs');
const [_, __, package] = process.argv;

const path = `./packages/${package}/${package}.d.ts`;
const file = fs.readFileSync(path).toString();
fs.writeFileSync(path, file.replace(/import '\.\//g, '// import \'./'));