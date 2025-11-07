import fs from 'fs'

fs.readFile('student.json','utf8',(err,data)=>{
    if(err){
        console.error("Error reading File");return;
    }

    let student = JSON.parse(data);

    student.forEach(el => {
        el.grade+=5
    });


    fs.writeFile('student.json', JSON.stringify(student,null,2),  (err) => {
        if (err) {
            console.error('Error writing file:', err)
            return
        }
        console.log('JSON File updated Successfully')
    })
    
})