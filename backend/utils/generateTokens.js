import jwt from "jsonwebtoken";

const generateToken= (id)=>{
    // console.log(`token generated for ${id}`)
    const generatedToken= jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    });
    // console.log(generatedToken)
    return generatedToken
}
export default generateToken