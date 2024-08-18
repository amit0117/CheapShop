import jwt from "jsonwebtoken";

const generateToken= (id)=>{
    const generatedToken= jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    });
    return generatedToken
}
export default generateToken