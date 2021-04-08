const package = require('../package.json')
const api_login_admin = require('../controllers/login_admin')
const api_list_admin = require('../controllers/list_admin')
const api_edit_admin = require('../controllers/edit_admin')
const api_add_admin = require('../controllers/add_admin')
const api_upload_file = require('../controllers/api_upload_file')
const link_config = require('../../../config/link_config')
const auth_config = require('../../../config/auth_config')
module.exports.admimA = function (app) {
    // console.log(package.api_name+"login/")

    app.route(package.api_name+package.table_admin+'/')
        .get(auth_config.checkToken,api_list_admin.get_all);

    app.route(package.api_name+package.table_admin+'/:id')
        .get(api_list_admin.get_id);

    app.route(package.api_name+package.table_admin+'/name/:name')
        .get(api_list_admin.get_username);

    app.route(package.api_name+package.add+package.table_admin+'/')
        .post(api_add_admin.add_);

    // app.route(package.api_name+package.add+'user/')
    //     .post(api_add_admin.add_user);

    app.route(package.api_name+package.edit+package.table_admin+'/:id')
        .post(api_edit_admin.edit_);

    app.route(package.api_name+'login/admins/')
        .post(api_login_admin.login_admin);

    app.route(package.api_name+'login/')
        .post(api_login_admin.login_user);

    // app.route(package.api_name+'api_upload_file')
    //     .post(link_config.upload.single('image'),api_upload_file.add_file);

}
