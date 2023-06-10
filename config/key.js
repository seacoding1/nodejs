//process.env.NODE_ENV가 production(배포)한걸로 나오면
//prod 파일에서 가져오기
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
//아나면 dev파일에서 가져오기
} else {
    module.exports = require('./dev');
}