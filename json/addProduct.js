import fs from 'fs'

const Grocery = {
    Atta: "30/kg",
    Maida: "30/kg",
    Besan: "80/kg",
    Dal: "100/kb"
}

const jsonData = JSON.stringify(Grocery, null, 2)

// Write to a file in the same folder named student.json
fs.writeFile('./products.json', jsonData,  (err) => {
    if (err) {
        console.error('Error writing file:', err)
        return
    }
    console.log('JSON data written to ./products.json')
})
