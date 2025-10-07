const mongoose=require("mongoose");
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    service:{
        type:String,
        trim:true,
        required:true,
    },
     date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: "",
      trim: true,
    },
},{ timestamps: true });

const contactModel=mongoose.model("contact",contactSchema);
module.exports=contactModel;