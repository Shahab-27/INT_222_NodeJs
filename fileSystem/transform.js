import fs from 'fs';
import zlib from 'zlib'; 

fs.createReadStream('input.txt')
.pipe(zlib.createGzip()) // compress data
.pipe(fs.createWriteStream('input.txt.gz'));

console.log("File compressed successfully!")

