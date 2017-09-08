const  BackendTheme  = require('../controllers/api.export')
const router = require('koa-router')()

router
    // 主题相关
    .post('/theme/create',BackendTheme.create_theme)
  
module.exports = router