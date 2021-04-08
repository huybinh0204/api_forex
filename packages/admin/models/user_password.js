var mongoose = require('mongoose');
var package = require('../package.json')
var User_PasswordSchema = new mongoose.Schema({
    username_us:  {type: String, unique : true, required : 'ERROR_NAME_MISSING', dropDups: true},
    password_us: {type: String, default: null},
    status_user_pass: {type: Number, default: 0},
    created_usp: {type: Date, default: Date.now},
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', index: true, default: null}
    // roles: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Role"
    //     }
    // ]
});


module.exports = mongoose.model('user_password', User_PasswordSchema);
