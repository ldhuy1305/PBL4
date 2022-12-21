const express = require('express');
const router = express.Router();
const {
    create,
    details,
    update,
    deletephieumuon,
    list,
  } = require('../controllers/phieumuon');;
router.post('/', create);
router.get('/:id', details);
router.put('/:id', update);
router.delete('/:id', deletephieumuon);
router.get('', list);
module.exports = router;
