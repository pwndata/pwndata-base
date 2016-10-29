"use strict";
const router = require("koa-router")();

//load controllers
const Index = require("../controllers/index.js");

//index
router.get("/", Index.index);


module.exports = router.routes();