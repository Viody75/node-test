
// __dirname = path to current dir
// __filename = filename
// require = function to use modules
// module = info about current modules
// process = info about env where the program is being excuted

console.log('2-globals on running');

console.log('direktori:');
console.log(__dirname)

console.log('filename:');
console.log(__filename)

// console.log('require:');
// console.log(require)

// console.log('module:');
// console.log(module)

// console.log('process:');
// console.log(process)

setInterval(() => {
    console.log('fungsi setInterval');
}, 2000);