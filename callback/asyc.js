import fs from 'fs'
fs.readFile('test.txt', 'utf8', function (err, data) {
    if (err) {
        console.log("Error reading file", err);

    }
    else {
        console.log("file content: ", data);
    }
});

console.log("Reading file");