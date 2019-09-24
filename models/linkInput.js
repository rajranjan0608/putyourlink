var mongoose                =require("mongoose");

//TABLE SCHEMA
var linkInput=new mongoose.Schema({

    iframe : String
    
});

//MAKING TABLE
var linkInput=new mongoose.model("linkInput", linkInput);

//EXPORTING MODULE
module.exports=linkInput;