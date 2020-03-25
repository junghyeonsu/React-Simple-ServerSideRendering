const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;
const oracledb = require('oracledb');
const dbConfig = require('./dbConfig');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/dbTestSelect',function(request,response){

    oracledb.getConnection({
        user : dbConfig.user,
        password : dbConfig.password,
        connectString : dbConfig.connectString
    },
    function(err,connection){
        if(err) {
            console.error(err.message);
            return;
        }
        console.log('Connection was successful!');
        let query = 'select * from player';

        connection.execute(query, [], function(err, result) {
            if (err) {
                console.error(err.message);
                doRelease(connection);
                return;
            }
            // console.log(result.rows); //데이터
            doRelease(connection, result.rows); // Connection 해제
        });
    });

    function doRelease(connection, rowList) {
        connection.release(function (err) {
            if (err) {
                console.error(err.message);
            }
 
            // DB종료까지 모두 완료되었을 시 응답 데이터 반환
            console.log('list size: ' + rowList.length);
            
            response.send(JSON.stringify(rowList));
        });
    }

})

app.listen(port, () => console.log(`Listening on port ${port}`));
