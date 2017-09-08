const  BackendTheme  = require('../controllers/theme')
const router = require('koa-router')()

router
    // 主题相关
    .post('/theme/create',BackendTheme.create_theme)
  
module.exports = router