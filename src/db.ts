import mongoose from 'mongoose';


mongoose.connect('mongodb://127.0.0.1:27017/frontend').then(() => { 
    console.log("\x1b[92m[MongoDB] La conexion a la base de datos exitosa \x1b[39m");
}).catch(err => console.log(err))