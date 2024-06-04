// Importar la variable
import app from "./server.js";

app.listen(app.get('port'), ()=>console.log("Server on"))