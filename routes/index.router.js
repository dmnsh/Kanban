const { Router } = require('express')
const router = Router()

router.use('/workspace', require('./workspace.router'))
router.use('/board', require('./board.router'))
router.use('/panel', require('./panel.router'))
router.use('/task', require('./task.router'))

module.exports = router