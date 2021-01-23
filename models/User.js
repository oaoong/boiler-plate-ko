const mongoose = require('mongoose');

// Schema 생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // space 없애주는 역할
        unique: 1 // 중복 x
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
        default: 0 // 권한 나누기
    },
    image: String, 
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// model로 Schema를 감싸줌
const User = mongoose.model('User', userSchema)

module.exports = {User} // 다른 파일에서 쓸 수 있도록