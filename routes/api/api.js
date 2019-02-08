var express = require("express");
var router = express.Router();

var datos = [];

var _datos = {
    _id: uuidv4,
    empresa: 'nombre empresa',
    url: 'urk del video',
    nombre:'nombre del video de anuncio',
    year: 'año del super bowl',
    rating:'numero del 1 - 5',
    fechaing: Date
};


  router.post("/new", function(req, res, next) {
    var _newdatos = Object.assign({}, _info, req.body);
    datos.push(_newdatos);
    var _newIndex = datos.length - 1;
    res.json({ status: "ok", index: _newIndex, datos: _newdatos });
  });

  router.put("/modify/:index", function(req, res, next) {
    var _index = parseInt(req.params.index);
    var _newdatos = datos.map(

      function(currentdatos, i) {
        if (i === _index) {
          return Object.assign({}, currentdatos, req.body);
        }
        return currentinfo;
      }
    );
    informacion = _newdatos;
    res.json(datos[_index]);
  });

  