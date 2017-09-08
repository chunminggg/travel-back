const UserModel = require('../models/index')
const mongoose = require('mongoose')

const ThemeModel = mongoose.model('Theme')

class BackendTheme {
    static async create_theme(ctx) {
        const data = ctx.request.body
        console.log(data)
        ctx.body = 'hello'
        // const theme_name = data.name
        // if (!data || !theme_name) return ctx.body('error', {
        //     message: '信息错误!',
        //     error: { status: 404 }
        // })
        // const isexit = await ThemeModel.findOne({ theme_name })
        // if (isexit) return ctx.body('error', {
        //     message: '该主题已存在',
        //     error: { status: 201 }
        // })
        // const themeData = await ThemeModel.create(data)
        // return ctx.body('success', {
        //     message: '创建主题成功'
        // })
    }
}

module.exports = BackendTheme
