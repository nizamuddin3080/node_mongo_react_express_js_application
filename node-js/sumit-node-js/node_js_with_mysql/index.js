const mysql = require('mysql');

const DatabaseConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'college',
};

const conn = mysql.createConnection(DatabaseConnectionConfig);

conn.connect((error) => {
    if (error) {
        console.log('connection fail');
    } else {
        console.log('connection success');
        // InsertData(conn);
        // DeleteDataById(conn);
        // UpdateData(conn);
        SelecData(conn);
    }
});
function InsertData(conn) {
    const SQLQuery =
        'INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ("nizam", "30", "10", "0129673080", "dhaka")';

    conn.query(SQLQuery, (error) => {
        if (error) {
            console.log('data insert fail');
        } else {
            console.log('data inserted on the table');
        }
    });
}

function DeleteDataById(conn) {
    const SQLQuery = "DELETE FROM `students_list` WHERE `id`= '1'";

    conn.query(SQLQuery, (error) => {
        if (error) {
            console.log('data delete fail');
        } else {
            console.log('Data delete successfull');
        }
    });
}

function UpdateData(conn) {
    const SQLQuery =        "UPDATE `students_list` SET `phone`='111111111',`city`='rajshahi' WHERE `id` = '2'";

    conn.query(SQLQuery, (error) => {
        if (error) {
            console.log('data update fail');
        } else {
            console.log('Data update successfull');
        }
    });
}

function SelecData(conn) {
    const SQLQuery = 'SELECT * FROM `students_list`';

    conn.query(SQLQuery, (error, result) => {
        if (error) {
            console.log('data update fail');
        } else {
            console.log(result);
        }
    });
}
