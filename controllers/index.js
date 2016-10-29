"use strict";
// import modules
const views = require("co-views");
const config = require("../configs/config.js");
// get the view's path
const viewsPath = config.path.views;
// render
const render = views(viewsPath, {
    map: {
        html: "ejs"
    }
});
module.exports.index = function* index (next) {
    this.body = yield render("index", {
        username: "pwndata"
    });
    return ;
};