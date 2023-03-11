const mongoose=require("mongoose");

const CommentSchema=new mongoose.Schema(
    {                                                                    
        commentPost:{ type:String, required:true,},
        
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model("Comment",CommentSchema);           