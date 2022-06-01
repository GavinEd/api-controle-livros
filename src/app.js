import express from "express";
import db from "./config/dbConnect.js"
import rota from "./routes/index.js"

db.on("error", console.log.bind(console, 'Error de conexao'))
db.once("open", () =>{
      console.log('conexao com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

rota(app);

export default app
