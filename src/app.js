let express = require("express");
let app = express();
var path = require("path");
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));
console.log( path.join(__dirname,"../public"))
app.get("",(req,res)=>{
    res.send("home page")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})
app.get("/weather",(req,res)=>{
    res.send("weather page")
})
app.get("*",(req,res)=>{
    res.send("404 error page")
})
app.listen(800,()=>{
    console.log("chaalu hua")
})