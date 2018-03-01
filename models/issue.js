'use strict';
module.exports = (sequelize, DataTypes) => {
  var Issue = sequelize.define('Issue', {
    description: DataTypes.STRING,
    assigned: DataTypes.STRING,
    severity: {
      type: DataTypes.ENUM,
      defaultValue: 'low',
      values: ['high', 'medium', 'low']
    }
  }, {});
  Issue.associate = function(models) {
    // associations can be defined here
    // models.Issue.belongsTo(models.User, {
    //   onDelete: "CASCADE",
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
  }
  return Issue;
};