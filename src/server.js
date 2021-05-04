const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
    .connect(dbConfig.url, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Se conecto a la Bd");
    })
    .catch((err) => {
        console.log("Ocurrio un error al conectar...", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a la aplicacion de notas.",
    });
});

//todas las rutas
require("./app/routes/note.routes.js")(app);

app.listen(8080, () => {
    console.log("Server is listening on port ", 8080);
});
