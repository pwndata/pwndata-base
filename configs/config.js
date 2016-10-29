"use strict";
/**
 * Created by pwndata on 2016年10月29日 029.
 * www.pwndata.com
 */

// load conf.json
const config = require("../conf.json");

//require
const path = require("path");

/*	database configs
 *	use Sequelize ORM
 */
const dbHost = config.database.mysql.host;
const dbPort = config.database.mysql.port;
const dbUsername = config.database.mysql.username;
const dbPassword = config.database.mysql.password;
const dbName = config.database.mysql.dbName;




//route path config
const root = path.dirname(__dirname); // Located in the root directory of the project
module.exports.path = {};
module.exports.path.static = path.join(root, "public");
module.exports.path.views = path.join(root, "views");

//export
module.exports.app = config.app;



