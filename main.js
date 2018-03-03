var http = require("http"),
    fs = require("fs");
// var html = fs.readFileSync("./index.html");
// var manejador = function(solicitud, respuesta){
//   console.log(Recibimos una nueva peticion);
//   respuesta.write(html);
//   respuesta.end();
// };
//
// http.createServer(manejador);
//
// var servidor = http.createServer(manejador);
// servidor.listen(8080);
http.createServer(function(req, res){
  fs.readFile("./index.html", function(err,html){
    res.writeHead(200,{
      "Content-Type":"text/html"
    })
    // res.write(html);
    ress.write(JSON.stringify({nombre:"Uriel", username:"uriel"}));
    res.end();
  });
}).listen(8080);
