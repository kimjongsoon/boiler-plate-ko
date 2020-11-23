const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String, /*문자*/
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, /*kim anna@naver.com으로 이메일 작성 시 스페이스를 trim이 없애준다.*/
        unique: 1 /*똑같은 이메일은 쓰지못하게 한다.*/
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String, /* type:을 생략할 수 도 있다. */
    token: {
        type: String /*유효성관리*/
    },
    tokenExp: {
        type: Number /*token이 사용할 수 있는 기간*/
    }

})

const User = mongoose.model('User', userSchema) /*Schema를 모델로 감싸준다.*/

module.exports = { User } /*다른 파일에서도 쓸 수 있게 만든다.*/