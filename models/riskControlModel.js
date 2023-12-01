module.exports = (sequelize, DataTypes) => {

    const RiskControl = sequelize.define("riskControl", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        additionalControl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RC_Severity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        RC_Likehood: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        RC_RPN: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        implementationPerson: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        remarks: {
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
    }, {
        timestamps: true,
        hooks: {
            beforeSave: (riskEval, options) => {
                // Calculate RPN before saving
                riskEval.RC_RPN = riskEval.RC_Severity * riskEval.RC_Likelihood;
            }
        }
    })
    return RiskControl
}