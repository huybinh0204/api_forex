const jwt = require('jsonwebtoken');
const secret_config = require('./secret_config')
const {HTTP_CODE_401_JWT_01,HTTP_CODE_401_JWT_02} = require("./code_message");
module.exports = {
    checkToken: (req, res, next) => {
        let authorize_token = req.get("authon");
        let jwt_token = "";
        if (authorize_token === undefined) {
            res.status(401);
            res.send({code: "401", message: HTTP_CODE_401_JWT_01});
            return;
        } else if (authorize_token.startsWith("")) {
            jwt_token = authorize_token.substring(0);
        } else {
            res.status(401);
            res.send({code: "401", message: HTTP_CODE_401_JWT_01});
            return;
        }
        try {
            let payload = jwt.verify(jwt_token, secret_config.secret);
            if (payload["type"] != 'access')
                throw 'invalis JWT token';
            req.token = jwt_token;
            next();
        } catch (e) {
            // console.error("Invalis JWT Token")
            res.status(401);
            res.send({code: "401", message: HTTP_CODE_401_JWT_02});
            // res.send({code: "401", message: "Invalis JWT Token !"});
        }
    }
};
