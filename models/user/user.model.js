const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    phoneNumber: { type: String, required: true },//手机号
    password: { type: String, required: true },  //密码
    createdAt: {type:Date, default:Date.now},
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User',UserSchema)