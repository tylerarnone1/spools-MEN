var express = require('express');
var router = express.Router();
var spoolsCtrl = require('../controllers/spools');

router.post('/', spoolsCtrl.addPost);
router.get('/', spoolsCtrl.readSpools);
router.delete('/:id', spoolsCtrl.delPost);
router.put

module.exports = router;