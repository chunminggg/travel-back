const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: { type: String, required: true },//名称
    themeType:{type:Number,required:true},//所属主题
    detailContent: { type: Array, required: true },//详情
    place: { type: String, required: true },//出发城市
    isRecommend: { type: Boolean, required: true },//是否推荐
    isTop: { type: Boolean, required: true },//是否置顶
    isSpecialPrice: { type: Boolean, required: true },//是否特价
    startDate: { type: String, required: true },//开始日期
    endDate: { type: String, required: true },//结束日子
    countNumber: { type: Number, required: true },//点击量
    imageArray: { type: Array, required: true },//图片
    describe: { type: String, required: true },//描述
    price: { type: String, required: true },//价格
    onlySign: { type: String, required: true },//唯一标识符
    createdAt: { type: Date, default: Date.now },//创建时间
    updatedAt: { type: Date, default: Date.now },//修改时间
})
module.exports = mongoose.model('Product', ProductSchema)

