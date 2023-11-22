const dbConfig = require('../config/db_config');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./user.js')(sequelize, DataTypes)
db.products = require('./raDashboard.js')(sequelize, DataTypes)
db.products = require('./role.js')(sequelize, DataTypes)
db.products = require('./workActivity.js')(sequelize, DataTypes)
db.products = require('./hazardIdentification.js')(sequelize, DataTypes)
db.products = require('./riskEvaluation.js')(sequelize, DataTypes)
db.products = require('./riskControl.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done')
})

module.exports = db
