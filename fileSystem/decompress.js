import fs from 'fs'
import zlib from 'zlib'

fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('data.txxt'));

console.log("File decompressed successfully");
