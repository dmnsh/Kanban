const { Router } = require('express')
const WorkspaceController = require('../controllers/workspace.controller')
const router = Router()

router.post('/create', WorkspaceController.create)
router.get('/:id', WorkspaceController.getOne)
router.get('/all', WorkspaceController.getAll)

module.exports = router