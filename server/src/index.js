const http = require("http");
const characters = require("./utils/data");
const PORT = 3001;

http.createServer(function (req, res) {
        
    const url = req.url.split("/");
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];
    console.log(url);
    if (param1 === "rickandmorty" && param2 === "characters") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(characters));
    }
    if (param1 === "rickandmorty" && param2 === "character") {
      const character = characters.find((char) => {
        return char.id === Number(id);
      });

      if (character)
       return res
          .writeHead(200, { "Content-Type": "application/json" })
          .end(JSON.stringify(character));
    }
    return res
          .writeHead(404, { "Content-Type": "text/plain" })
          .end("Not Found");
  })
  .listen(PORT, () => {
    console.log("server is running in port http://localhost:3001");
  });
