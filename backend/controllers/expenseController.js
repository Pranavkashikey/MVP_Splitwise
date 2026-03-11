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

