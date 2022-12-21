const Nguoidung = require('../models/nguoidung');
exports.create = async (req, res,next) =>{
    let nguoidung =await new Nguoidung(
        {
            hoten: req.body.hoten,
            ngaysinh: req.body.ngaysinh,
            diachi: req.body.diachi,
            gioitinh: req.body.gioitinh,
            dienthoai: req.body.dienthoai,
            email: req.body.email,
            nhiemvu: req.body.nhiemvu,
            taikhoan: req.body.taikhoan,
            matkhau: req.body.matkhau,
        }
    );
    nguoidung.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Created ')
    })
};
exports.list =  async (req, res, next) => {
    try {
        const Nguoidungs = await Nguoidung.find({}) 
        res.status(200).json(Nguoidungs);
    } catch (error) {
        next(error)
    }
};
exports.details = async (req, res, next)=> {
    try {
        const nguoidung = await Nguoidung.findById(req.params.id)
        res.status(200).json(nguoidung);
    } catch (error) {
        next(error)
    }
};
exports.update = async (req, res, next)=> {
    try {
        const nguoidung = await Nguoidung.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.send('Udpated.');
    } catch (error) {
        next(error)
    }
};
exports.deleteuser = async (req, res, next)=> {
    try {
        const nguoidung = await Nguoidung.findByIdAndRemove(req.params.id)
        res.send('Deleted.');
    } catch (error) {
        next(error)
    }
};
