module.exports = (sequelize, DataTypes) => {
    const WorkActivity = sequelize.define("workActivity", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        teamLeader: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        teamMember: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastModif: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        hazard_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'hazard',
                key: 'id'
            }
        },
    }, {
        timestamps: true,
        updatedAt: 'lastModif', // Map the updatedAt hook to the lastModif field
        hooks: {
            beforeValidate: (workActivity, options) => {
                workActivity.lastModif = new Date().toISOString();
            },
        },
    });

    return WorkActivity;
};
