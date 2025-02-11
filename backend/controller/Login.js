const  User  = require("../models/user");
const cookie = require("cookie");
async function handleLogin(req, res) {
    
    const {  Email, Password } = req.body;
    try {
        const Token = await User.checkPassword(Email, Password);
        console.log(Token);
        
        res.cookie('token', Token, {
 
  path: "/",
  httpOnly: true,
  secure: true,
  sameSite: "None"
});
        
        return res.json({redirecturl:'/home',errorflag:'no'});
    }
    catch(e) {
        console.log(e.message);
       return res.json({ redirecturl: "/login", errorflag: "yes" });
     }
}
module.exports = handleLogin;
