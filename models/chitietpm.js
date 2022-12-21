const mongoose = require("mongoose");

const chitietpmSchema = mongoose.Schema({
      sach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sach",
      },
    soluong: {
      type: Number,
      required: true,
      default : 1,
    },
});
module.exports = mongoose.model("Chitietpm", chitietpmSchema);