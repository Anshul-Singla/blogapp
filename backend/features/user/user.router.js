import * as jwt from "jsonwebtoken"; 
import { Router } from "express";
import UserModel from './user.model';

const app = Router();
console.log('jwt:', jwt)

app.get('/' , (req , res) =>{
    res.send("you are using user router")
})

app.post('/signup' , (req , res) => {
    console.log('body:', req.body);
    // const newUser = UserModel.create(req.body)
})


export default app;