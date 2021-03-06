const Sequelize = require('sequelize');

const connection = new Sequelize(
    process.env.DB_BASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: 2223,
        dialect: "postgres",
    }
);

module.exports = connection;