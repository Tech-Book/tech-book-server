'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('copies',{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    book_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('copies');
  }
};