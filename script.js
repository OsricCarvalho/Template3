const nbs = require("express")
const server = nbs()

server.set("view engine", "ejs")

server.get("/",function(req,res){

    res.render("homepage.ejs")
    res.end
})
server.get("/timestable/:number",function(req,res){

    res.render("timestable.ejs", {num:req.params.number})
    res.end
})


server.listen(3000)