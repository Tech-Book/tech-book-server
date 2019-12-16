const { Model, Sequelize } = require('sequelize');

class Rent extends Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.DOUBLE,
        devolutionDate: Sequelize.DATE,
        limitDate: Sequelize.DATE,
        withdrawnDate: Sequelize.DATE
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: ['student_id', 'studentId'],
      as: 'student'
    });
    this.belongsTo(models.Copy, {
      foreignKey: ['copy_id', 'copyId'],
      as: 'copy'
    });
  }
}

module.exports = Rent;
