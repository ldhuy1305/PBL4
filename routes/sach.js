const express = require('express');
const router = express.Router();
// const controller = require('../controllers/sach');
const {
    create,
    details,
    update,
    deletesach,
    list1,
    list,
  } = require('../controllers/sach');;
router.post('', create);
router.get('/:id', details);
router.put('/:id', update);
router.delete('/:id', deletesach);
router.get('', list);
router.get('/list1', list1);
module.exports = router;
