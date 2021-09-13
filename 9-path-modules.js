const path = require('path');

console.log(`Seperator : ${path.sep}`);

// method join akan menghapus // yang berlebih
const filePath = path.join('/content/', 'subfolder/', 'test.txt');
console.log(filePath);

// ngambil base nya
const basePath = path.basename(filePath);
console.log(basePath);

// buat de REAL file path! with root
const dirPath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(dirPath);