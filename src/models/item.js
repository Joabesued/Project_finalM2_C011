const Sequelize = require('sequelize');
const connection = require('../database/db')

const Item = connection.define('itens',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allwNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allwNull: false,
    },

    descricao: {
        type: Sequelize.STRING,
        allwNull: false,
    },

    marca: {
        type: Sequelize.STRING,
        allwNull: false,
    },

    imagem: {
        type: Sequelize.STRING,
        allwNull: false,
    },
},{
    freezeTableName: true,
    timestamp: false,
    createdAt: false,
    updatedAt: false,
}
);

module.exports = Item;