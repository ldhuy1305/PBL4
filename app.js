//Configuring the database
const dbConfig = 'mongodb+srv://PBL4:qwe123@cluster0.vlg4ciw.mongodb.net/?retryWrites=true&w=majority';
const mongoose = require('mongoose');

// Connecting to the database
mongoose
  .connect(dbConfig)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });
//app.js
const express = require('express');
const bodyParser = require('body-parser');
//Import routes
const Sach = require('./routes/sach');
const Phieumuon = require('./routes/phieumuon'); 
const Docgia = require('./routes/docgia');
const Nguoidung = require('./routes/nguoidung'); 
const Chitietpm = require('./routes/chitietpm'); 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/sach', Sach);
app.use('/phieumuon', Phieumuon);
app.use('/docgia', Docgia);
app.use('/nguoidung', Nguoidung);
app.use('/chitietpm', Chitietpm);
let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
