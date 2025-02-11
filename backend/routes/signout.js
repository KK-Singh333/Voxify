const express = require("express");
const Router = express.Router();
Router.get('/', (req, res) => {
    try{
    res.clearCookie('token');
    return res.json({
        errorflag:'no',
    });
    }
    catch{
        return res.json({errorflag:'yes'});
    }
})
module.exports = Router;
