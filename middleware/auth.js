const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res , next){
    // get token from header
    var token = req.header('x-auth-token')
    // check if not token
    if(!token){
        return res.status(401).json({msg :'No token, authorization denied'});
    }
    //Verify token
    try{
     
        const decoded = jwt.verify(token , config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    }catch(err){
        console.error(err)
        res.status(401).json({msg:'token is not valid'});
    }
}