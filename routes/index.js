

module.exports = function (app) {
  const admin_controllers = require('../packages/admin/routes/index');
  admin_controllers.admimA(app)
}
