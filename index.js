
const express = require('express');
var cors = require('cors');
const app = express();
const port = 8089;
const bodyParser = require('body-parser');

const config = require("./config/key");

const { User } = require("./models/users");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
                  .then(() => console.log('MongoDB Connected...'))
                  .catch(err => console.log(err));
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {

    const { name } = req.params
    //key값을 입력하면 바로 값이 적용됨

    if(name == "dog") {
        res.json({'sound':'멍멍'})
    }else if(name == "cat") {
        res.json({'sound':'냐옹'})
    }else if(name == "pig") {
        res.json({'sound':'꿀꿀'})
    }else {
        res.json({'sound':'알 수 없음'})
    }

})


app.post('/register', (req, res) => {

    //회원가입 할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body);
    //user모델에 정보가 저장됨
    //실패 시, 실패한 정보를 보내줌
    user.save().then(() => {
       res.status(200).json({
        success : true
       })
    }).catch((err)=>{
        return res.json({success : false, err})
    });

})






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})