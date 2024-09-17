import express from "express";
const app = express();
import mongoose from "mongoose";
 
mongoose.connect("mongodb+srv://diallobousso10:Monsenegal@cluster0.6vwxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

)
.then(()=> app.listen(3000))
.then(()=> 
console.log("app is listening to db 3000")
)
 .catch((err) => console.log(err))
