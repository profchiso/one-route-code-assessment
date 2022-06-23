'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class messages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    messages.init({
        to: DataTypes.STRING,
        recipient_type: {
            type: DataTypes.STRING
        },

        to: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        from: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING
        },
        timestamps: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'messages',
    });
    messages.associate = function(models) {
        messages.belongsTo(models.messageBody, { foreignKey: 'id', as: 'text' })

    }
    return messages;
};