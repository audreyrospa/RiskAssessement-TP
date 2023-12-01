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
            allowNull: true,
        },
        RE_Severity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        RE_Likehood: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        RE_RPN: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
            allowNull: true,
            references: {
              model: 'riskControl',
              key: 'id'
            }
        },
    }, {
        timestamps: true,
        hooks: {
            beforeSave: (riskEval, options) => {
                // Calculate RPN before saving
                riskEval.RE_RPN = riskEval.RE_Severity * riskEval.RE_Likelihood;
            }
        }
    })
    return RiskEval
}