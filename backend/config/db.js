import mongoose, { mongo } from 'mongoose'
import color from 'colors'
mongoose.set('strictQuery', false);
const connectDB=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            // useCreateIndex:true
        })
        console.log(`MongoDB connected :${connection.connection.host}`.cyan.underline)
    }
    catch(error){
         console.log(`Error: ${error.message}`.red.underline.bold)
         process.exit(1)
    }
}
export default connectDB