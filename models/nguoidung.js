const mongoose = require("mongoose");

const nguoidungSchema = mongoose.Schema({
    hoten:
    {
      type: String,
      required: [true],
      max: 100
    },
    diachi:
    {
      type: String,
      required: [true],
      max: 100
    },
  ngaysinh:
    {
      type: Date,
      required: [true],
    },
    gioitinh:
    {
        type: Boolean,
        required: [true],
    },
    dienthoai:
    {
        type: String,
        required: [true],
        minlength: 10,
        maxlength: 10,
        },
    email:
    {
        type: String,
        required: [true],
        max: 100,
        unique: true,
        dropDups: true 
    },
    nhiemvu: 
    {
      type: String,
      required: [true],
      max: 100
    },
    taikhoan: 
      {
        type: String,
        required: [true],
        max: 100,
        unique: true,
        dropDups: true 
      },
    matkhau:
      {
        type: String,
        required: [true],
        max: 100
      },
});

module.exports = mongoose.model("Nguoidung", nguoidungSchema);