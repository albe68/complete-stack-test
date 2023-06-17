const mongoose =require('mongoose');

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"must have a title"]

    },
    body:{
        type:String,
        required:[true,"must have a body"]

    }
})

module.exports=mongoose.model("Blog",blogSchema);