var mongoose = require('mongoose');
var package = require('../package.json')
var UserSchema = new mongoose.Schema({
    user_pass_id:  { type: mongoose.Schema.Types.ObjectId, ref: 'user_password', index: true, default: true},
    fullname: {type: String, default: null},
    first_name: {type: String, default: null},
    email: {type: String, default: null},
    address: {type: String, default: null},
    birthday: {type: Number, default: 0},
    phone: {type: String, default: null},
    gender: {type: Number, default: 0},
    cmnd: {type: String, default: null},
    money: {type: Number, default: 0},
    icon_front: {type: String, default: null},
    icon_backside: {type: String, default: null},
    created_us: {type: Date, default: Date.now},
    // roles: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Role"
    //     }
    // ]
});


module.exports = mongoose.model('user', UserSchema);
