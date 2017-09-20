const fs = require('fs');
const [_, __, package] = process.argv;

const path = `./packages/${package}/${package}.d.ts`;

let file = fs.readFileSync(path).toString();

// remove relative imports
file = file.replace(/import '\.\//g, '// import \'./');

// replace member methods with proto methods
const MEMBER_TO_PROTO = /(\n\s+\w+):\s*(\([\w\s:,]*\))\s+=>\s+(\w+);/;
let match;
while (match = MEMBER_TO_PROTO.exec(file)) {
  const [line, name, params, returnValue] = match;
  file = file.replace(line, `${name}${params}: ${returnValue}`)
}

// add any typing to react components
const REACT_PROPS = /(\w+) extends React\.Component\s+/g
while (match = REACT_PROPS.exec(file)) {
  const [line, name] = match;
  file = file.replace(line,
    `${name} extends React.Component<{[K in keyof (typeof ${name})['propTypes']]?: any }, any>`
  );
}

// react import
file = file.replace(/import React/g, 'import * as React');

fs.writeFileSync(path, file);