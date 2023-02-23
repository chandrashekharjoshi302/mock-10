const express=require("express")
const { BookingModel } = require("../routes/Booking.route")

const BookingRouter=express.Router()

BookingRouter.get("/booking",async(req,res)=>{
    let userID=req.body.userID
    let data=await BookingModel.find({userID})
    res.send(data)
})

BookingRouter.post("/dashboard",async(req,res)=>{
    let data=req.body
    let User=new BookingModel(data)
    await User.save()
    res.send("Added SuccessFully")
})





module.exports={
    BookingRouter
}