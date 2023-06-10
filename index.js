
const express = require('express');
var cors = require('cors');
const app = express();
const port = 8089;

const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user1234@localhost:27017/test')
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

app.get('/dog', (req, res) => {
    res.json({'sound':'냐옹'})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})