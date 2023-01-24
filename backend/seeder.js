import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'


dotenv.config()
connectDB()
const importData= async ()=>{
    try{
        await Order.deleteMany({})
        await User.deleteMany({})
        await Product.deleteMany({})
        const createdUser=await User.insertMany(users)
        const adminUser=createdUser[0]._id
        const sampleProducts=products.map(product=>{
            // console.log(product.countInStock);
            return {...product,user:adminUser}
        })
        await Product.insertMany(sampleProducts)
        console.log('data imported'.green.inverse)
    }
    catch(error){
        console.log(`error ${error}`.red.inverse)
    }
}
const destroyData= async ()=>{
    try{
        await Order.deleteMany({})
        await User.deleteMany({})
        await Product.deleteMany({})
        
        console.log('data deleted'.red.inverse)
    }
    catch(error){
        console.log(`error ${error}`.red.inverse)
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}
else importData()

