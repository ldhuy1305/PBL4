const Chitietpm = require('../models/chitietpm');
exports.create = async (req, res,next) =>{
    let chitietpm = new Chitietpm(
        {
            sach: req.body.sach,
            soluong : req.body.soluong,
        }
    );
    chitietpm.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json(chitietpm)
    })
};
exports.list =  async (req, res, next) => {
    try {
        const Chitietpms = await Chitietpm.find({}) 
        res.status(200).json(Chitietpms);
    } catch (error) {
        next(error)
    }
};
exports.details = async (req, res, next)=> {
    try {
        const chitietpm = await Chitietpm.findById(req.params.id)
        res.status(200).json(chitietpm);    
    } catch (error) {
        next(error)
    }
};
exports.update = async (req, res, next)=> {
    try {
        await Chitietpm.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.send('Chitietpm udpated.');
    } catch (error) {
        next(error)
    }
};
exports.deletechitietpm = async (req, res, next)=> {
    try {
        await Chitietpm.findByIdAndRemove(req.params.id)
        res.status(200).send('Chitietpm deleted.');
    } catch (error) {
        next(error)
    }
};
exports.deleteall = async (req, res, next)=> {
    try {
        await Chitietpm.deleteMany();
        res.status(200).send('Chitietpm deleted all');
    } catch (error) {
        next(error)
    }
};
