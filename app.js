"use strict";
//system init
const koa = require('koa');
const app = new koa();
const config = require('./configs/config.js');
const convert = require('koa-convert');


//

// static files
const serve = require("koa-static");
const staticFilePath = config.path.static;
app.use(convert(serve(staticFilePath)));

// routes
app.use(convert(require("./routes/router.js")));

// listen, just listen localhost, use nginx to reverse proxy
const port = config.app.port;
app.listen(port, "localhost");