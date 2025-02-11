const express = require("express");
const Router = express.Router();
Router.get('/', (req, res) => {
    try{
    res.clearCookie('token');
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0");
    return res.json({
        errorflag:'no',
    });
    }
    catch{
        return res.json({errorflag:'yes'});
    }
})
module.exports = Router;
