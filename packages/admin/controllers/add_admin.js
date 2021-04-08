var admins = require('../models/admins');
var md5 = require('md5');
const {HTTP_CODE_200,HTTP_CODE_422,HTTP_CODE_204} = require("../../../config/code_message");
module.exports = {
    add_: (req, res) => {
        var models=new admins();
        models.username_ad = req.body.username_ad;
        models.password_ad = req.body.password_ad;
        models.created_ad = Date.now();
        models.save(function(err){
            if(err) {
                res.json({code:"422",message:HTTP_CODE_422});
            }else {
                admins.findOne({username_ad: req.body.username_ad }, function(err, data){
                    if(err){
                        res.json({code:"200",message:HTTP_CODE_204});
                    }
                    const datas=[{
                        _id:data._id,
                        username_ad:data.username_ad,
                        status_admin:data.status_admin,
                        created_ad:data.created_ad
                    }]
                    res.json({code:"200",message:HTTP_CODE_200,data:datas});
                });
            }
        })
    },
    add_user: (req, res) => {
        var models=new admins();
        models.username_ad = req.body.username_ad;
        models.password_ad = req.body.password_ad;
        models.created_ad = Date.now();
        models.save(function(err){
            if(err) {
                res.json({code:"422",message:HTTP_CODE_422});
            }else {
                admins.findOne({username_ad: req.body.username_ad }, function(err, data){
                    if(err){
                        res.json({code:"200",message:HTTP_CODE_204});
                    }
                    const datas=[{
                        _id:data._id,
                        username_ad:data.username_ad,
                        status_admin:data.status_admin,
                        created_ad:data.created_ad
                    }]
                    res.json({code:"200",message:HTTP_CODE_200,data:datas});
                });
            }
        })
    },

}
