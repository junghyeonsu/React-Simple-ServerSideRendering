const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'test'
})

app.get('/show',function(req,res){
    var sql3 = 'select * from login';
    connection.query(sql3,function(err,row,field){
        if (err) throw err;

        var user = [];  

        for(var i = 0 ; i < row.length; i++) {
            user.push({
                uniqueId : row[i].id,
                id : row[i].user_id,
                password : row[i].password,
                name : row[i].name,
                register_date : row[i].register_date
            })
        }
        res.send({
            "user" : user,
        })
    })
})

app.post('/send',(req, res) => {
    var a = req.body.data;
    console.log(a);
    res.send(`<script>
    alert('입력하신 데이터는 ${a} 입니다.');
    history.back();
</script>`);
})

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/api/name',(req,res) => {
    res.send([
        {
            'name' : '정현수'
        },
        {
            'name' : '하이'
        },
        {
            'name' : '현수정'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));
