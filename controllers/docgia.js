const Docgia = require('../models/docgia');
exports.create = async (req, res,next) =>{
    let docgia =await new Docgia(
        {
            hoten: req.body.hoten,
            diachi: req.body.diachi,
            namsinh: req.body.namsinh,
            soluongsachdamuon: req.body.soluongsachdamuon,
            vipham: req.body.vipham
        }
    );
    docgia.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json(docgia);
    })
};
exports.list =  async (req, res, next) => {
    try {
        const Docgias = await Docgia.find({}) 
        res.status(200).json(Docgias);
    } catch (error) {
        next(error)
    }
};
exports.details = async (req, res, next)=> {
    try {
        const docgia = await Docgia.findById(req.params.id)
        res.status(200).json(docgia);
    } catch (error) {
        next(error)
    }
};
exports.update = async (req, res, next)=> {
    try {
        const docgia = await Docgia.findByIdAndUpdate(req.params.id, {$set: req.body},{new :true})
        res.status(200).json(docgia);
    } catch (error) {
        next(error)
    }
};
exports.deletedocgia = async (req, res, next)=> {
    try {
        const docgia = await Docgia.findByIdAndRemove(req.params.id)
        res.send('Sach deleted.');
    } catch (error) {
        next(error)
    }
};
