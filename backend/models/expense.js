const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Expense = sequelize.define("Expense",{

    name:{
        type:DataTypes.STRING
    },

    value:{
        type:DataTypes.FLOAT
    },

    currency:{
        type:DataTypes.STRING
    },

    created_by:{
        type:DataTypes.INTEGER
    },

    date:{
        type:DataTypes.DATE
    }

});

module.exports = Expense;