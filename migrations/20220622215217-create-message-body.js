'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('messageBodies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            body: {
                type: Sequelize.STRING
            },
            messageId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'messages',
                    key: 'id',
                },
                allowNull: false
            },
            timestamps: Sequelize.STRING,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('messageBodies');
    }
};