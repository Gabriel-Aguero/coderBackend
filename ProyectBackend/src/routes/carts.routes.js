const { Router } = require('express');

const router = new Router();
const carts = [];

router.get('/', (req, res) =>{
    res.json({ ok: true, message: "Listado de Carts", carts })
})

router.post('/', (req, res) =>{
    const newCart = req.body;
    carts.push(newCart);

    res.json({ 
        ok: true, 
        message: "Cart Agregado Correctamente", 
        cart: newCart,
    })
})

module.exports = router;