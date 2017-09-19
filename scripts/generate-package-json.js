const fs = require('fs');
const [_, __, package] = process.argv;

const package$json = require(`../slate/packages/${package}/package.json`);
const this$package$json = require('../package.json');

console.log(JSON.stringify({
  name: `@crosslead/${package$json.name}-typings`,
  version: package$json.version,
  decription: `generated typings for ${package$json.name}`,
  repository: this$package$json.repository,
  license: this$package$json.license,
  main: 'index.js',
  typings: './index.d.ts'
}, null, 2));
