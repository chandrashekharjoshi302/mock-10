const mongoose=require("mongoose")

const BookingSchema=mongoose.Schema({
    
        _id: ObjectId,
        user : { type: ObjectId, ref: 'User' },
        flight : { type: ObjectId, ref: 'Flight' }
   
   
})

const BookingModel=mongoose.model("api",BookingSchema)

module.exports={
    BookingModel
}