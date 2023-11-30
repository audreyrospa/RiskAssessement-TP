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
            allowNull: true,
            references: {
                model: 'workActivity',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        submitTime: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: [['waiting for assessment', 'approval', 'rejected']]
            }
        },
        lastReview: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        nextReview: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        timestamps: true,
        hooks: {
            beforeSave: async (raDashboard, options) => {
                    // Update lastReview before saving
                raDashboard.lastReview = new Date();
    
                    // Calculate nextReview as the current date plus 3 years
                raDashboard.nextReview = new Date();
                raDashboard.nextReview.setFullYear(raDashboard.nextReview.getFullYear() + 3);
            }
        }
    }); return RaDashboard
}
    