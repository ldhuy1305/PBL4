const Sach = require('../models/sach');
exports.create = async (req, res,next) =>{
    let sach =await new Sach(
        {
            masach: req.body.masach,
            nhande: req.body.nhande,
            theloai: req.body.theloai,
            nxb: req.body.nxb,
            namxb: req.body.namxb,
            ngonngu: req.body.ngonngu,
            tacgia: req.body.tacgia,
            tinhtrang: req.body.tinhtrang,
            soluonghientai : req.body.soluonghientai,
        }
    );
    sach.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Sach created ')
    })
};
exports.list =  async (req, res, next) => {
    try {
        sl = req.query.soluonghientai;
        if (sl == 1) {
            const Sachs = await Sach.find({soluonghientai: 1});
            res.status(200).json(Sachs);
        }else if (sl == 0) {
            const Sachs = await Sach.find({soluonghientai: 0});
            res.status(200).json(Sachs);
        }else {
            const Sachs = await Sach.find();
            res.status(200).json(Sachs);
        }            
    } catch (error) {
        next(error)
    }
};
exports.list1 =  async (req, res, next) => {
    try {
        const Sachs = await Sach.find({ soluonghientai: 1 })
        res.status(200).json(Sachs);
    } catch (error) {
        next(error)
    }
};
exports.details = async (req, res, next)=> {
    try {
        const sach = await Sach.findById(req.params.id)
        res.status(200).json(sach);
    } catch (error) {
        next(error)
    }
};
exports.update = async (req, res, next)=> {
    try {
        const sach = await Sach.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
        res.send({message:'Sach udpated.',sach:sach});
    } catch (error) {
        next(error)
    }
};
exports.deletesach = async (req, res, next)=> {
    try {
        const deletesach = await Sach.findByIdAndRemove(req.params.id)
        res.send('Sach deleted.');
    } catch (error) {
        next(error)
    }
};
