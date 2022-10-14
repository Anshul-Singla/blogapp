import * as jwt from "jsonwebtoken"; 
import { Router } from "express";
import  UserModel  from "./user.model.js";
// const UserModel = require('./user.model');

const app = Router();
console.log('jwt:', jwt)

app.get('/' , async (req , res) =>{
    let users = await UserModel.find();
    res.send(users);
})

app.post('/signin' , async(req , res) => {
    let user = await UserModel.findOne({email:req.body.email , password:req.body.password} , {_id:0 , username:1});
    if(!user){
        res.status(401).send('user nor found');
    }
    const mainToken = jwt.default.sign({name:user.username} , "chabi121" , {expiresIn:"1 hour"})
    res.send({message : "Login success"  , mainToken})
    
})

app.post('/signup' , async(req , res) => {
    console.log('body:', req.body);
    const newUser = await UserModel.create(req.body );
    
    res.send("User is created Welcom to blog");

})


export default app;