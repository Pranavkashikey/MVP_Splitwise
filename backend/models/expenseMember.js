const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ExpenseMember = sequelize.define("ExpenseMember", {

  expense_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  share: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

}, {
  tableName: "expense_members"
});

module.exports = ExpenseMember;