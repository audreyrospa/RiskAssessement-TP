module.exports = (sequelize, DataTypes) => {

    const RaDashboard = sequelize.define("raDashboard", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        workActivity_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'workActivity',
              key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        submitTime: {
            range: DataTypes.RANGE(DataTypes.DATE),
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastReview: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        nextReview: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
    })
    return RaDashboard
}