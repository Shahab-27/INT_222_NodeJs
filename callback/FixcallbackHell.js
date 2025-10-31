import fs from 'fs';
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) {
        console.log("error reading file:", err);

    } else {
        fs.readFile('file1.txt', 'utf8', (err, data2) => {
            if (err) {
                console.log("error reading file:", err);
                return;
            }
            fs.readFile('file1.txt', 'utf8', (err, data3) => {
                if (err) {
                    console.log("error reading file:", err);
                    return;
                }
                console.log(data1, data2, data3);
            })
        })
    }

})