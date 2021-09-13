//contoh sinkronus

// syntax destruktur modul fs(FileSync)
const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const rFirst = readFileSync('./content/first.txt', 'utf8');
const rSecond = readFileSync('./content/second.txt', 'utf8');

console.log(rFirst, rSecond);

//writeFile (default nya, tanpa flag) to append
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${rFirst}, ${rSecond} ; /n`,
    { flag: 'a' }
)
console.log('done');
console.log('doing next task');

