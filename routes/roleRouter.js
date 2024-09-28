const { Router } = require('express');
const RoleController = require('../controllers/RoleController');

const router = Router();

router.post('/create', RoleController.createRole);
router.get('/all', RoleController.getRoles);

module.exports = router;
