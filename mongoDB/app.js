const {MongoClient} = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

const dbName = 'university';

async function runCRUD(){
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const employees = db.collection('employees');

        // Create
        const insertResult = await employees.insertOne({ name: 'Akshat', department: 'Software Engineer', role: 'Developer' ,email: 'akshat@example.com',salary: 70000});
        console.log('Insert Result:', insertResult.insertedId);

        // Read
        const employe=await employees.find().toArray();
        console.log('All Employees:', employe);

        // Update   
        const updateResult = await employees.updateOne(
            { name: 'Akshat' },
            { $set: { salary: 75000 } }
        );
        console.log('Update Result:', updateResult.modifiedCount);

        // Delete
        const deleteResult = await employees.deleteOne({ name: 'Akshat' });
        console.log('Delete Result:', deleteResult.deletedCount);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

runCRUD();