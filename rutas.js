const express = require('express');
const router = express.Router();
router.use(express.json());

let productos = [{id:2,title:"soda", precio:25, link:"https://www.amazon.com.mx/Fanta-Refresco-Naranja-355ml-mililitros/dp/B092NBXWM7/ref=asc_df_B092NBXWM7/?tag=gledskshopmx-20&linkCode=df0&hvadid=511194815985&hvpos=&hvnetw=g&hvrand=51548664910461002&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031214&hvtargid=pla-1298903934850&psc=1"},
    {id:1,title:"papas", precio:25, link:"https://www.amazon.com.mx/Fanta-Refresco-Naranja-355ml-mililitros/dp/B092NBXWM7/ref=asc_df_B092NBXWM7/?tag=gledskshopmx-20&linkCode=df0&hvadid=511194815985&hvpos=&hvnetw=g&hvrand=51548664910461002&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031214&hvtargid=pla-1298903934850&psc=1"},
{id:3,title:"galletas", precio:21, link:"https://www.amazon.com.mx/Fanta-Refresco-Naranja-355ml-mililitros/dp/B092NBXWM7/ref=asc_df_B092NBXWM7/?tag=gledskshopmx-20&linkCode=df0&hvadid=511194815985&hvpos=&hvnetw=g&hvrand=51548664910461002&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031214&hvtargid=pla-1298903934850&psc=1"}]

router.get('/productos',(req,res)=>{
    res.send({productos});

})
router.get('/productos/:id',(req,res)=>{
    let id = req.params.id;
    let prodcuto = productos.filter(element => element.id == id);
    if(prodcuto.length=== 0){
        res.end('el id no exites')
    }else{
        res.send({prodcuto});
    }
});

router.post('/productos',(req,res)=>{
    let producto = req.body;
    producto.id= productos.length+1;
    console.log(req.body);
    productos.push(producto);
    res.send("se agrego correctamente");
    res.redirect('/')
   
})
router.delete('/productos/:id',(req,res)=>{
    let id = req.params.id;
     productos = productos.filter(element => element.id !== id);

    res.send({msg:'se elimino correctamente'});
   
})

module.exports= router