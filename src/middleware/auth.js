import jwt from "jsonwebtoken";

const auth = (req,res,next) =>{
    const token = req.header("Authorization")?.split(" ")[1];
    if(!token){
        const error = new Error("No token, authorization denied");
        error.status = 401;
        next(error);
    }   
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    }
    catch{
        const error = new Error("Token is not valid");
        error.status = 401;
        next(error);
    }
}

export default auth;
