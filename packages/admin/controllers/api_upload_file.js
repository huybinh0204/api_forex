var hotels = require('../models/admins');
const link_config = require("../../../config/link_config");
const {HTTP_CODE_200} = require("../../../config/code_message");
module.exports = {
    add_file: (req, res) => {
        var models=new hotels()
        models.image= link_config.url_link + req.file.path.replace('public/uploads/','');
        res.json({code:"200",message: HTTP_CODE_200});
    },
}
