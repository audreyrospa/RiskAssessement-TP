module.exports = (sequelize, DataTypes) => {

    const RiskEval = sequelize.define("riskEval", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        existRiskControl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RE_Severity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        RE_Likehood: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        RE_RPN: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hazard_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'hazard',
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
    }, {
        timestamps: true,
    })
    return RiskEval
}