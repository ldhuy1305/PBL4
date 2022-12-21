const mongoose = require("mongoose");

const sachSchema = mongoose.Schema({
  nhande: 
    {
      type: String,
      required: [true],
      max: 100
    },
  theloai:
    {
      type: String,
      required: [true],
      max: 100
    },
    nxb:
    {
      type: String,
      required: [true],
      max: 100
    },
  namxb:
    {
      type: String,
      required: [true],
      max: 100
    },
    ngonngu:
    {
        type: String,
        required: [true],
        max: 100
      },
      tacgia:
      {
          type: String,
          required: [true],
          max: 100
        },
        tinhtrang:
        {
            type: String,
            required: [true],
            max: 100
          },
          soluonghientai:
          {
              type :Number,
              required: [true],
            },
});

module.exports = mongoose.model("Sach", sachSchema);