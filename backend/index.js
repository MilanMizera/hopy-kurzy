const express = require("express")
const port = 5000

const app = express()


app.get("/api",  (req,res) => {


const obj =  {

name:"Milan",
surname:"Mizera",

}

res.send(obj)

})




app.listen(port, ()=> console.log("server běží na portu " + port))