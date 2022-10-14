import  express  from "express";


const app = express();

const PORT = 8080;
app.get('/' , (req, res) => {
    res.send('<h1>LIFE IS AWESOME...</h1>')
});


app.listen(PORT , () => {
    console.log(`app is listing on http://localhost:${PORT}`);
})