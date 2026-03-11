const Expense = require("../models/expense");

exports.addExpense = async(req,res)=>{

const {name,value,currency,date}=req.body

const expense = await Expense.create({
name,
value,
currency,
date
})

res.json(expense)

}