var admins = require('../models/admins');
var user_password = require('../models/user_password');
var md5 = require('md5');
var jwt = require("jsonwebtoken");
const config_ = require("../../../config/secret_config");
const {HTTP_CODE_200, HTTP_CODE_422, HTTP_CODE_400} = require("../../../config/code_message");
module.exports = {
    login_admin: (req, res, next) => {
        const username_ad = req.body.username_ad;
        const password_ad = req.body.password_ad;
        if (username_ad && password_ad != null) {
            admins.findOne({username_ad: username_ad}, (err, rowsn) => {
                if (err) {
                    res.json({code: "422", message: HTTP_CODE_422});
                }
                if (rowsn != null) {
                    const b = password_ad;
                    const a= rowsn.password_ad;
                    if (b != a) {
                        res.json({code: '400', message: HTTP_CODE_400});
                    }else {
                        const payload = {
                            id: rowsn._id,
                            username_ad: rowsn.username_ad,
                            status_admin: rowsn.status_admin,
                            created_ad: rowsn.created_ad,
                            type: "access"
                        }
                        const token = jwt.sign(payload, config_.secret, {
                            algorithm: 'HS256',
                            expiresIn: 86400 // 24 hours
                        });
                        const data = {
                            token: token,
                            id: rowsn._id,
                            username_ad: rowsn.username_ad,
                            status_admin: rowsn.status_admin,
                            created_ad: rowsn.created_ad,
                        }
                        res.json({code: '200', message: HTTP_CODE_200, data: [data]});
                    }
                } else {
                    res.json({code: "400", message: HTTP_CODE_400});
                }

            });
        } else {
            res.json({code: "422", message: HTTP_CODE_422});
        }
    },
    login_user: (req, res, next) => {
        const username_ad = req.body.username_ad;
        const password_us = req.body.password_ad;
        if (username_ad && password_us != null) {
            admins.findOne({username_ad: username_ad}, (err, rowsn) => {
                if (err) {
                    res.json({code: "422", message: HTTP_CODE_422});
                }
                if (rowsn != null) {
                    if (rowsn.password_us != password_us) {
                        res.json({code: '400', message: HTTP_CODE_400});
                    }else {
                        const payload = {
                            id: rowsn._id,
                            username_ad: rowsn.username_ad,
                            status_admin: rowsn.status_admin,
                            created_us: rowsn.created_us,
                            type: "access"
                        }
                        const token = jwt.sign(payload, config_.secret, {
                            algorithm: 'HS256',
                            expiresIn: 86400 // 24 hours
                        });
                        const data = {
                            token: token,
                            id: rowsn._id,
                            username_ad: rowsn.username_ad,
                            status_user_pass: rowsn.status_user_pass,
                            created_us: rowsn.created_us,
                        }
                        res.json({code: '200', message: HTTP_CODE_200, data: [data]});
                    }
                } else {
                    res.json({code: "400", message: HTTP_CODE_400});
                }

            });
        } else {
            res.json({code: "422", message: HTTP_CODE_422});
        }
    },
}
