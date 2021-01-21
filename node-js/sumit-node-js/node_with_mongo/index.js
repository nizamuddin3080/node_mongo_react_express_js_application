const { MongoClient } = require('mongodb');

const URL = 'mongodb://127.0.0.1:27017/';

const config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, (error, MyMongoClinet) => {
    if (error) {
        console.log('Connection Fail');
    } else {
        console.log('Connection Success');

        // InsertData(MyMongoClinet);

        DeleteOneItem(MyMongoClinet);
        // DeleleAllItem(MyMongoClinet);
        // FindOneWithoutCondition(MyMongoClinet)
        // FindOneWithCondition(MyMongoClinet);
        // FindAllData(MyMongoClinet)
        // FindAllDataByProjection(MyMongoClinet);
        // FindAllDataByQuery(MyMongoClinet)
        // FindAllDataByLimit(MyMongoClinet)
        // FindAllDataBySort(MyMongoClinet);
        //  UpdateMyData(MyMongoClinet);
        // CreateMyCollection(MyMongoClinet)
        // DeleteMyCollection(MyMongoClinet);
    }
});

function InsertData(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');
    const MyData = {
        name: 'Rabbil',
        Roll: '02',
        Class: 'Ten',
        City: 'Dhaka',
    };
    MyCollection.insertOne(MyData, (error) => {
        if (error) {
            console.log('Data Insert Fail');
        } else {
            console.log('Data Insert Success');
        }
    });
}
function DeleteOneItem(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');
    const DeleteItem = { Roll: '02' };
    MyCollection.deleteOne(DeleteItem, (error) => {
        if (error) {
            console.log('Data Delete Fail');
        } else {
            console.log('Data Delete Success');
        }
    });
}

function DeleleAllItem(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');
    MyCollection.deleteMany((error, ResultObj) => {
        if (error) {
            console.log('Delete Fail');
        } else {
            console.log(`${ResultObj.result.n} Item Deleted`);
        }
    });
}

function FindOneWithoutCondition(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');
    const FindObj = {};
    MyCollection.findOne(FindObj, (error, result) => {
        console.log(result);
    });
}

function FindOneWithCondition(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');
    const FindObj = { Roll: '05' };
    MyCollection.findOne(FindObj, (error, result) => {
        console.log(result);
    });
}

function FindAllData(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');
    MyCollection.find().toArray((error, result) => {
        console.log(result);
    });
}

function FindAllDataByProjection(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');

    const ItemObj = {};
    const ItemProjection = { projection: { Class: '', Roll: '' } };

    MyCollection.find(ItemObj, ItemProjection).toArray((error, result) => {
        console.log(result);
    });
}

function FindAllDataByQuery(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');

    const Query = { Roll: '01', City: 'Rangpur' };

    MyCollection.find(Query).toArray((error, result) => {
        console.log(result);
    });
}

function FindAllDataByLimit(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');

    MyCollection.find()
        .limit(20)
        .toArray((error, result) => {
            console.log(result);
        });
}

function FindAllDataBySort(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');

    const SortPattern = { Class: -1 };

    MyCollection.find()
        .sort(SortPattern)
        .toArray((error, result) => {
            console.log(result);
        });
}

function UpdateMyData(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    const MyCollection = MyDataBase.collection('students');

    const MyQuery = { Roll: '4' };
    const MyNewValues = { $set: { name: 'Rabbil Hasan Rupom', City: 'Gaibandha' } };

    MyCollection.updateOne(MyQuery, MyNewValues, (error, result) => {
        console.log(result);
    });
}

function CreateMyCollection(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');
    MyDataBase.createCollection('teachers', (error, result) => {
        console.log(result);
    });
}

function DeleteMyCollection(MyMongoClinet) {
    const MyDataBase = MyMongoClinet.db('school');

    MyDataBase.dropCollection('teachers', (error, result) => {
        console.log(result);
    });
}
