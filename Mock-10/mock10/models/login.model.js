const mongoose=require("mongoose")

const loginSchema=mongoose.Schema({
   
    email:String,
    name:String,
    password:String
    
},{
    versionKey:false
})
const LoginModel=mongoose.model("Apis",loginSchema)

module.exports={
    LoginModel
}
