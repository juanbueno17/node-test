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
  if(req.url.indexOf("favicon.ico") > 0){return;}
  console.log("============================\n\n");
  console.log(req);
  console.log("============================\n\n");
  fs.readFile("./index.html", function(err,html){
    var html_string = html.toString();
    var arreglo_parametros = [];
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    // if(req.url.indexOf("?") > 0){return;}
    var nombre = "Cristian";

    if(req.url.indexOf("?") > 0){
      var url_data = req.url.split("?");
      var arreglo_parametros = url_data[1].split("&");
    }

    for (var i = 0; i < arreglo_parametros.length; i++) {
      var parametro = arreglo_parametros[i];
      var param_data = parametro.split("=");
      parametros[param_data[0]] = param_data[1];
    }

    for (var i = 0; i < variables.length; i++) {
      var variable = variables[i];
      html_string = html_string.replace("{"+variables[i]+"}", parametros[variable]);
    };
    res.writeHead(200,{
      "Content-Type":"text/html"
    })
    res.write(html_string);
    // res.write(JSON.stringify({nombre:"JuanK", username:"juenbueno1711"}));
    res.end();
  });
}).listen(8080);
