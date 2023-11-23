module.exports = (sequelize, DataTypes) => {

    const Hazard = sequelize.define("hazard", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        hazard: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        injuryorAccident: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        riskEval_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'riskEval',
              key: 'id'
            }
        },
        riskControl_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'riskControl',
              key: 'id'
            }
        },
        workActivity_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'workActivity',
              key: 'id'
            }
        },
    }, {
        timestamps: true,
    })
    return Hazard
}