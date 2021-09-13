// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm instal -g <packageName> (mac)

// package.json - a manifest files (stores important info about project/package)
// manual approach (create package.json in the root, create prop etc)
// npm init (step by step, enter to skip)
// npm init -y (everything is default)

const _ = require('lodash');

const items = [1, [2, [3]]]
const newItems = _.flattenDeep(items) // fungsi dari lodash modules-dependency

console.log(newItems);