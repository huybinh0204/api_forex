var admins = require('../models/admins');
var md5 = require('md5');
const {HTTP_CODE_200, HTTP_CODE_422, HTTP_CODE_204} = require("../../../config/code_message");
module.exports = {
    edit_: (req, res) => {
        var models = new admins();
        var data_params = {username_ad: req.params.id};
        var datas = req.body;
        admins.findOne({username_ad: req.params.id}, (err, roomData) => {
            if (err) {
                res.json({code: "422", message: HTTP_CODE_422});
            } else {
                admins.updateOne(data_params, {$set: datas}, function (err) {
                    if (err) {
                        res.json({code: "422", message: HTTP_CODE_422});
                    } else {
                        res.json({code: "200", message: HTTP_CODE_200});
                    }
                })
            }
        });

    },
}

// let {id, name, city,address,owner,total_floor,license_number} = req.body;
// hotels.findOne({_id: id}, function(err, model){
//     if(err){
//         res.send('Id khong ton tai');
//     }
//
//     model.name = name;
//     model.city = city;
//     model.address=address;
//     model.owner=owner;
//     model.total_floor=total_floor;
//     model.license_number=license_number;
//     if(req.file != null){
//         model.image = req.file.path.replace('public', '');
//     }
//     model.save(function(err){
//         if(err){
//             res.send('cap nhat khong thanh cong');
//         }
//
//         res.redirect('/');
//     })
// })
