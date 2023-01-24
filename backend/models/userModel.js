import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }

},{
    timestamps:true
})
userSchema.methods.matchPassword=async function(enteredPassword){
return await bcrypt.compare(enteredPassword,this.password);
}

// to encrypt password before saving to database
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        // if password modify nhi hua hai means
        // if we change our username or password
        // not creating new username or pssword then 
        // no need to rehash the password
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()
})
const User=mongoose.model('User',userSchema)
export default User