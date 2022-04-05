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
       res.render("itens", {itens, itensPut: null,
        itensDel : null})
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

const getById = async (req, res) => {
    try{
        const method = req.params.method;
        const itens = await Item.findAll();
        const item = await Item.findByPk(req.params.id);

        if(method == "put"){
            res.render("itens",{
                itens,
                itensPut : item,
                itensDel : null,
            });
        } else {
            res.render("itens",{
                itens,
                itensPut : null,
                itensDel : item,
        });
    }
        
    } catch (err) {
        res.status(500).send({err: err.message});
    }
}
    
const update = async (req, res) => {

     try {

         const item = req.body;
         await Item.update(item, {where: { id: req.params.id} });
         res.redirect("/meus-itens"); 

     } catch (err) {
        res.status(500).send({err: err.message});
     }
}

const remove = async (req, res) => {

    try {

        await Item.destroy({where:{id: req.params.id}});
        res.redirect("/meus-itens");
    } catch (err) {
       res.status(500).send({err: err.message});
    }
}

module.exports = {
    getAll,
    adicionar,
    principal,
    create,
    getById,
    update,
    remove,
};