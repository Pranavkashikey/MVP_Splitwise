const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Balance = sequelize.define("Balance",{

user_id:{
type:DataTypes.INTEGER
},

owes_to:{
type:DataTypes.INTEGER
},

amount:{
type:DataTypes.FLOAT
}

})

module.exports = Balance