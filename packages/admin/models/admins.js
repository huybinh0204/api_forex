var mongoose = require('mongoose');
var package = require('../package.json')
// tyle : boolean; null ; number(Integer, double); String, Object;Array;Date;Object ID;
// Boolean: 2  giá trị true ,false
//trim: Loại bỏ các ký tự khoảng trắng, bao gồm cả null hoặc các ký tự được chỉ định từ đầu và cuối của một chuỗi
//unique: Để tạo một giá trị duy nhất,
//dropDups: loại boả bản ghi trùng lặp
// required gui thong bao
var AdminSchema = new mongoose.Schema({
    username_ad:  {type: String, unique : true, required : 'ERROR_NAME_MISSING', dropDups: true},
    password_ad: {type: String, default: null},
    //status_admin 0: tk hoat động 1 tai khoan bi khoa
    status_admin: {type: Number, default: 0},
    created_ad: {type: Date, default: Date.now}
});


module.exports = mongoose.model(package.table_admin, AdminSchema);
