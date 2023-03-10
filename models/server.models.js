const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosPath = "/api/usuarios";

    //*fmiddleware
    this.middleware();

    //* rutas de aplicación
    this.routes();
  }

  middleware() {
    //* CORS
    this.app.use(cors());

    //* lectura y  parseo  del body
    this.app.use(express.json());

    //* directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("express corriendo en puerto " + this.port);
    });
  }
}

module.exports = Server;
