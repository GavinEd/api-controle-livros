import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://myUser:myPass@databook.fhie3.mongodb.net/db_livros')

let db = mongoose.connection

export default db;
