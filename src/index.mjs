import express from "express";

const app = express();

const PORT = process.env.PORT ;

app.get('/', (req, res) =>{
    res.send("Hello From te API")
})
app.listen(3000 , ()=>{
    console.log(`Running on Port ${3000}`);
})