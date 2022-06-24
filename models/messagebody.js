'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class messageBody extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    messageBody.init({
        body: DataTypes.STRING,
        messageId: DataTypes.INTEGER,
        timestamps: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'messageBody',
    });
    messageBody.associate = function(models) {
        messageBody.belongsTo(models.messages, { foreignKey: 'id', as: 'text' })

    }
    return messageBody;
};