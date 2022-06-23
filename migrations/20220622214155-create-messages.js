'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('messages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            recipient_type: {
                type: Sequelize.STRING
            },

            to: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            from: {
                type: Sequelize.STRING,

            },
            type: {
                type: Sequelize.STRING
            },
            // text: {
            //     type: Sequelize.STRING
            // },
            timestamps: Sequelize.INTEGER,
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
        await queryInterface.dropTable('messages');
    }
};