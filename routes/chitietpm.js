const express = require('express');
const router = express.Router();
// const controller = require('../controllers/chitietpm');
const {
    create,
    details,
    update,
    deletechitietpm,
    list,
    deleteall,
  } = require('../controllers/chitietpm');;
router.post('/', create);
router.get('/:id', details);
router.put('/:id', update);
router.delete('/:id', deletechitietpm);
router.delete('', deleteall);
router.get('', list);
module.exports = router;
