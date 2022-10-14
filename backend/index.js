import  express  from "express";
import cors from "cors";
import userRouter from "./features/user/user.router.js";
import { connect } from "./config/db.js";

// console.log('connect:', connect)

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;
app.get('/' , (req, res) => {
    res.send('<h1>LIFE IS AWESOME...</h1>')
});

app.use('/user' , userRouter)

app.listen(PORT , async () => {
    await connect();
    console.log(`app is listing on http://localhost:${PORT}`);
})