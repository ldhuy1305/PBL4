const express = require('express');
const router = express.Router();
const {
    create,
    details,
    update,
    deletedocgia,
    list,
  } = require('../controllers/docgia');;
router.post('/', create);
router.get('/:id', details);
router.put('/:id', update);
router.delete('/:id', deletedocgia);
router.get('', list);
module.exports = router;
