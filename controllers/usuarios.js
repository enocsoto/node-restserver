const { response } = require('express');

const usuarioGet = (req, res = response) => {
  const {q, nombre = "no name", apikey, page=1, limit } = req.query;
  
    res.json({
        msg: 'Get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}


const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    
    res.json({
        msg: 'Post API - controlador',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response) => {
   const id=req.params.id;
   
    res.json({
        msg: 'Put API - controlador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
}
const usuariosPatch= (req, res = response) => {
    res.json({
        msg: 'Path  API - controlador'
    });
}

module.exports={
    usuarioGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}