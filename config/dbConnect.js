const mongoose=require("mongoose")

console.log("hello")
const DATABASE='mongodb+srv://Ansh:swatigupta02@cluster0.zt0cqn4.mongodb.net/?retryWrites=true&w=majority'
console.log(DATABASE)
const dbConnect=async()=>{
    try{
        await mongoose.connect(DATABASE);
        console.log("db connected")
    }
    catch(error)
    {
        console.log(error)
    }
    
}
dbConnect()