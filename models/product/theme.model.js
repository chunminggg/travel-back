const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThemeSchema = new Schema({
    name: { type: String, required: true },
    describe: { type: String, required: true },
    isTop: { type: Boolean, required: true },//是否置顶
    countNumber: { type: Number, required: true },//点击量
    createdAt: { type: Date, default: Date.now },//创建时间
    updatedAt: { type: Date, default: Date.now },//修改时间
})
module.exports = mongoose.model('Theme', ThemeSchema)
