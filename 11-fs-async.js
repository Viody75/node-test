// contoh asinkronus

// syntax destruktur modul fs(FileSync) this is the async one
const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    //ini adalah blok callback pertama
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        //ini adalah blok callback kedua
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here are the result : ${first} & ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done');
            }
        )
    })
    console.log('doing next task');
})