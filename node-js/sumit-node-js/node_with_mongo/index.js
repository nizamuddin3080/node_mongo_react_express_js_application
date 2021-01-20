const { MongoClient } = require('mongodb');

const URL =
    'mongodb+srv://nizamuddindemo:35EfYpoBHS1U@cluster0.agg59.mongodb.net/school?retryWrites=true&w=majority';
const config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, (error, MyMongoClint) => {
    if (error) {
        console.log('connect error');
    } else {
        console.log('connected successful');
    }
    // InsertData(MyMongoClint);
});

function InsertData(MyMongoClint) {
    const MyDataBase = MyMongoClint.db('school');
    const MyCollection = MyDataBase.collection('students');
    const MyData = {
        name: 'Nizam',
        roll: '25',
        class: 'ten',
        city: 'dhaka',
    };
    MyCollection.insertOne(MyData, (error) => {
        if (error) {
            console.log('Data Insert Failed');
        } else {
            console.log('Data Inserted Successfully');
        }
    });
}
function DeleteData(MyMongoClint) {}
