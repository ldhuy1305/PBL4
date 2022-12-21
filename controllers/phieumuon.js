const Phieumuon = require('../models/phieumuon');
exports.create = async (req, res,next) =>{
    let phieumuon = await new Phieumuon(
        {
            docgia: req.body.docgia,
            nguoidung: req.body.nguoidung,
            ngaymuon: req.body.ngaymuon,
            ngaytra: req.body.ngaytra,
            chitietpm : req.body.chitietpm,
        }
    );
    // phieumuon.ngaytra = req.body.ngaytra;
    // if (phieumuon.ngaytra > phieumuon.ngaymuon) {
    //   phieumuon.ngaytra = newDate;
    // }
    phieumuon.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send({message:'Created',phieumuon:phieumuon})
    })
};
// exports.add = async (req, res,next) =>{
//     try {
//         const phieumuon = await Phieumuon.findByIdAndUpdate(req.params.id, {$set: { chitietpm: req.body.machitietpm }})
//         res.send(phieumuon)
//     } catch (error) {
//         next(error)
//     }
// };
exports.list =  async (req, res, next) => {
    try {
        const Phieumuons = await Phieumuon.find({}) 
        res.status(200).json(Phieumuons);
    } catch (error) {
        next(error)
    }
};
exports.details = async (req, res, next)=> {
    try {
        const phieumuon = await Phieumuon.findById(req.params.id)
        res.status(200).json(phieumuon);
    } catch (error) {
        next(error)
    }
};
exports.update = async (req, res, next)=> {
    try {
        // const query = req.body;
        // const id = req.params.id;
        // console.log(query.chitietpm);
        // const phieumuon = await Phieumuon.findByIdAndUpdate(
        //     {_id : id},
        //     {
        //         docgia: query.docgia,
        //         nguoidung: query.nguoidung,
        //         ngaymuon: query.ngaymuon,
        //         ngaytra: query.ngaytra,
        //     },
        //     {chitietpm : query.chitietpm},
        //     );
        // if (!phieumuon){
        //     res. status(500).json({
        //         message: "Not Valid"
        //     });
        // }
        const phieumuon = await Phieumuon.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(phieumuon);

    } catch (error) {
        next(error)
    }
};
exports.deletephieumuon = async (req, res, next)=> {
    try {
        const phieumuon = await Phieumuon.findByIdAndRemove(req.params.id)
        res.send('Deleted.');
    } catch (error) {
        next(error)
    }
};
