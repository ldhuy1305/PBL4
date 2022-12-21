const mongoose = require("mongoose");

const phieumuonSchema = mongoose.Schema({
    docgia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Docgia",
    },
    nguoidung: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nguoidung",
    },
ngaymuon:
  {
    type: Date,
    required: [true],
  },
  ngaytra:
  {
    type: Date,
    required: [true],
  },
  chitietpm :[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chitietpm",
    },
  ],
  
});

module.exports = mongoose.model("Phieumuon", phieumuonSchema);