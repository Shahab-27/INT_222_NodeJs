import fs from 'fs';

fs.readFile('config.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    }
    else {
        
        let config = JSON.parse(data);
        config.mode = "production";
        config.version = "2.0.0";
        fs.writeFile('config.json', JSON.stringify(config, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Config updated successfully');
            }
        });
    }
});