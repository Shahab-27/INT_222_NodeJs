import fs from 'fs';

//manual event handling
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream)

console.log("File successfully copied using pipe !!")