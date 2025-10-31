import fs from 'fs'

const writeStream = fs.createWriteStream('output.txt')

writeStream.write('Hello ')
writeStream.write('How are youuuuuu!!!!!!!')

writeStream.end();

writeStream.on('finish', () => {
    console.log('File writing completed')
})