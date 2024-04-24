import app from './src/app';
import './src/db'

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`\x1b[34m[EXPRESS] Servidor iniciado en el puerto ${port}`);
} );


import Post from './src/routes/Post.route'
app.use('/api/posts', Post);

