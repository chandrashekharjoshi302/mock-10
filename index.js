const mongoose=require("mongoose")

const express=require("express")

const { connection } = require("./configs/db")

const {authenticate}=require("./middlewares/Authenticate")

const { loginRouter } = require("./routes/login.route")

const cors=require("cors")

const { userRouter } = require("./routes/Flight.route")

const { BookingRouter } = require("./routes/Booking.route")
require("dotenv").config()

const app=express()

app.use(cors())

app.use(express.json())

app.use("/api",loginRouter)

app.use(authenticate)
app.use("/api/flights",userRouter)
app.use("/api",BookingRouter)
app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("Connected to db",process.env.port)
    } catch (error) {
        console.log(error)
    }
})