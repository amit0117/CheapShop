import mongoose from 'mongoose'

mongoose.set('strictQuery', false);
const connectDB=async()=>{
    try{
        const connection=mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            // useCreateIndex:true
        })
        console.log(`MongoDB connected :${connection.connection.host}`)
    }
    catch(error){
         console.log(`Error: ${error.message}`)
         process.exit(1)
    }
}
export default connectDB