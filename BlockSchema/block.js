const mongoose=require("mongoose")
const BlockSchema=new mongoose.Schema(
    {
        title:String,
        content:String
    }
)
module.exports= mongoose.model("block",BlockSchema)