const Item = require('../models/Item');

const principal = (req, res) => {
    try {
       res.render("index");
    } catch (err){
        res.status(500).send({err: err.message});
    }
}

const getAll = async (req, res) => {
    try {
       const itens = await Item.findAll();
       res.render("itens", {itens});
    } catch (err){
        res.status(500).send({err: err.message});
    }
}; 

const adicionar = (req, res) => {
    try {
         res.render("adicionar");
    } catch(err){
        res.status(500).send({err: err.message});
    }
}

const create = async (req, res) => {
    try {
        const item = req.body;

        if(!item){
            return res.redirect("/adicionar");
        }
        await Item.create(item);
        res.redirect("/meus-itens");
    } catch (err) {
        res.status(500).send({err: err.message});
    }
};

    

module.exports = {
    getAll,
    adicionar,
    principal,
    create,
};