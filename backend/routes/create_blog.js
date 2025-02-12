const express = require("express");
const handleCreatedBlog=require('../controller/createdBlog');
const Router = express.Router();
console.log("Came on blog route");
Router.post('/',handleCreatedBlog)
module.exports = Router;
