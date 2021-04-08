var multer = require('multer');
var shortid=require('shortid');
module.exports.url_link = 'http://localhost:3000/uploads/';
var storage = multer.diskStorage({
    //nơi lưu trữ
    destination: function (req, file, cb) {
        cb(null, './public/uploads');

    }, filename: function (req, file, cb) {
        cb(null, shortid.generate() + "00" + file.originalname);
    }

});
module.exports.upload = multer({ storage: storage });



