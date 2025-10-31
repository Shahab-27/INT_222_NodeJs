import fs from 'fs'

const readable = fs.createReadStream('input.txt', 'utf8');

readable.on('data', (chunk) => {
  console.log('New chunk received:\n', chunk);
});

readable.on('end', () => {
  console.log('Finished reading file.');
});

readable.on('error', (err) => {
  console.error('Error:', err);
});
