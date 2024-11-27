const Express = require("express")
const Rotas = require("./Rotas/UserRoute");
const bodyParser = require("body-parser");



const App = Express();
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:true}))
App.use(Rotas)
App.listen(5000,() =>{
    console.log("Funcionou")
})