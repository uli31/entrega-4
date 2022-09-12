const express = require('express')
const app = express();
const userRouter = require("./rutas");

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.listen(8080,()=> console.log('conectado'));
app.set('views', './views');
app.set('view engine','ejs');
app.get('/',(req,res)=>{
        res.render('home')
})
app.use('/api',userRouter);
