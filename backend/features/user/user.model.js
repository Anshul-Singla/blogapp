import { Schema , model } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        require:true
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