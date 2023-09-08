const {Sequealize, Sequelize} = require ('sequelize')

const {config} = require('../config/config')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequealize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});


module.exports  = sequealize
