const http = require("http");
//const data = require("./utils/data")
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      //console.log("Aca estoy en la ruta");
      const id = url.split("/").at(-1);
      //res.end(`Estoy en la ruta con id: ${id}`)
      /*const character = data.find(char=>char.id===parseInt(id))
        if(character){
            res.writeHead(200,{"Content-Type":"application/json"})
            return res.end(JSON.stringify(character))
        }
        else{
            res.writeHead(404,{"Content-Type":"application/json"})
            return res.end(JSON.stringify({error:"Character not found"}))
        }*/

      getCharById(res, id);
    }
  })
  .listen(3001, "localhost");
