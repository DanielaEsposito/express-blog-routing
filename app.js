
const express = require('express');
const { url } = require('inspector');
const app = express();
const port = 3000
app.use(express.static('public'))

app.get('/',(req, res)=> {
    res.send ("server del mio blog")
})

app.get('/bacheca',(req, res)=> {
    const posts =[
{   
    titolo: "Ciambellone",
    contenuto:"",
    img:"./public/img/ciambellone.jpeg",
    tags : ["ciambellone", "dolce"]
},
{   
    titolo: "Cracker alla barbabietola",
    contenuto:"",
    img:"./public/img/cracker_barbabietola.jpeg",
    tags : ["snack","salato"]
},
{   
    titolo: "Pane fritto",
    contenuto:"",
    img:"./public/img/cracker_barbabietola.jpeg",
    tags : ["pane", "cina"]
},
{   
    titolo: "Pasta alla barbabietola",
    contenuto:"",
    img:"./public/img/pasta_barbabietola.jpeg",
    tags : ["pasta", "barbabietola", "rosso"]
},
{   
    titolo: "Torta paesana",
    contenuto:"",
    img:"./public/img/torta_paesana.jpeg",
    tags : ["tradizione", "torta", "dolce"]
}]
res.json({
    number : posts.length,
    posts :posts
})
})

app.listen(port ,()=>{
    console.log("il server è online");
    
})
