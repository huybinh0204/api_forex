var admins = require('../models/admins');
const {HTTP_CODE_200} = require("../../../config/code_message");
module.exports = {
    get_all: (req, res) => {
        admins.find({})
            .populate('cate_id')
            .exec((err, data) => {
                console.log(data);
                res.json({code: '200', message: HTTP_CODE_200, data: data});
            });
    },
    get_id: (req, res) => {
        admins.find({ _id: req.params.id })
            .populate('cate_id')
            .exec((err, data) => {
                console.log(data);
                res.json({code: '200', message: HTTP_CODE_200, data: data});
            });
    },
    get_username: (req, res) => {
        admins.find({ username_ad: req.params.name })
            .populate('cate_id')
            .exec((err, data) => {
                console.log(data);
                res.json({code: '200', message: HTTP_CODE_200, data: data});
            });
    },

}
