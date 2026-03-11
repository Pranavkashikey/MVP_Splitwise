const { Op } = require("sequelize");
const Expense = require("../models/expense");
const ExpenseMember = require("../models/expenseMember");
const Balance = require("../models/balance");

exports.addExpense = async (req, res) => {

  const { name, value, currency, members } = req.body;
  const created_by = req.body.userId;
    console.log(members);
    console.log(created_by);
  try {

    const expense = await Expense.create({
      name,
      value,
      currency,
      created_by,
      date: new Date()
    });

    const share = value / members.length;
    console.log(share);
    for (let member of members) {

     
      await ExpenseMember.create({
        expense_id: expense.id,
        user_id: member,
        share: share
      });

      
      if (member !== created_by) {

        await Balance.create({
          user_id: member,
          owes_to: created_by,
          amount: share
        });

      }

    }

    res.json({
      message: "Expense created successfully",
      expense
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

exports.getExpenses = async (req,res)=>{

try{

const expenses = await Expense.findAll()

res.json(expenses)

}catch(error){

res.status(500).json({error:error.message})

}

}

exports.updateExpense = async (req,res)=>{

const id = req.params.id
const {name,value,currency} = req.body

try{

await Expense.update(
{name,value,currency},
{where:{id}}
)

res.json({message:"Expense updated successfully"})

}catch(error){

res.status(500).json({error:error.message})

}

}

exports.deleteExpense = async (req,res)=>{

const id = req.params.id

try{

await Expense.destroy({
where:{id}
})

res.json({message:"Expense deleted successfully"})

}catch(error){

res.status(500).json({error:error.message})

}

}
exports.getActivity = async (req, res) => {

  const { start, end } = req.query;

  try {

    const expenses = await Expense.findAll({
      where: {
        date: {
          [Op.between]: [start, end]
        }
      }
    });

    res.json(expenses);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

