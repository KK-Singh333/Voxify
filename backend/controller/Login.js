const  User  = require("../models/user");
const cookie = require("cookie");
async function handleLogin(req, res) {
    
    const {  Email, Password } = req.body;
    try {
        const Token = await User.checkPassword(Email, Password);
        console.log(Token);
        
        res.cookie('token', Token, {
  domain: "https://voxify-qeb1.onrender.com",
  path: "/",
  httpOnly: true,
  secure: true,
  sameSite: "None"
});
        
        return res.json({redirecturl:'/home',errorflag:'no'});
    }
    catch {
       return res.json({ redirecturl: "/login", errorflag: "yes" });
     }
}
module.exports = handleLogin;
