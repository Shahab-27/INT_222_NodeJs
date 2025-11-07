import fs from 'fs'

const student = {
    name: "Shahab Fardeen",
    age: "22",
    contact: "123",
    city: "U.P"
}

const jsonData = JSON.stringify(student, null, 2)

// Write to a file in the same folder named student.json
fs.writeFile('./student.json', jsonData,  (err) => {
    if (err) {
        console.error('Error writing file:', err)
        return
    }
    console.log('JSON data written to ./student.json')
})
