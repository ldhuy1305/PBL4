const mongoose = require("mongoose");

const docgiaSchema = mongoose.Schema({
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
  namsinh:
    {
      type: String,
      required: [true],
      max: 100
    },
    soluongsachdamuon:
    {
      type: Number,
      default:0
    },
});


module.exports = mongoose.model("Docgia", docgiaSchema);