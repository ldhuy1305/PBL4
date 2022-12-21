const express = require('express');
const router = express.Router();
const {
    create,
    details,
    update,
    deleteuser,
    list,
  } = require('../controllers/nguoidung');;
router.post('', create);
router.get('/:id', details);
router.put('/:id', update);
router.delete('/:id', deleteuser);
router.get('', list);
module.exports = router;
