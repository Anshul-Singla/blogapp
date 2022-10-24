import { Schema , model } from "mongoose";

const userSchema = new Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    contact_number:{
        type:Number
    },
    email : {
        type:String , 
        require : true
    },
    password:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
    }

});
const UserModel = model("user" , userSchema);
export default  UserModel;