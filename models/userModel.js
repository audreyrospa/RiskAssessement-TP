module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        companyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        riskAssessement_id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
        },
        roleId: {
            type: DataTypes.INTEGER,
            defaultValue: 'user',
            unique: true,
            allowNull: false,
        }
    })
    return User
}