const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config();



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Medleware para servir el contenido HTML...
app.use(express.static('public/web'));

app.get('/', (req, res)=> {
    res.render('home',{
        nombre:'Juan Camilo',
        titulo:'Curso de Node'
    });
});
app.get('/elements', (req, res)=> {
    res.render('elements',{
        nombre:'Juan Camilo',
        titulo:'Curso de Node'
    })
});
app.get('/generic', (req, res)=> {
    res.render('generic',{
        nombre:'Juan Camilo',
        titulo:'Curso de Node'
    });
});
app.get('/hello', (req, res)=> {
    res.send('Hello World');
});
app.get('*', (req, res)=> {
    res.sendFile(__dirname+'/public/404.html');
});
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`El servidor está en: http://localhost:${PORT}`);
});