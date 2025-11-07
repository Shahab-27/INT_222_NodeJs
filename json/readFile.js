const fs = require('fs')

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    let user = JSON.parse(data);
    

    console.log(user.name);
    console.log(user.age);
    console.log(user.city);
    console.log(user.contact);
});