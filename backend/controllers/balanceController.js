const Balance = require("../models/balance");

exports.getBalances = async (req, res) => {

  const userId = req.params.userId;

  try {

    const balances = await Balance.findAll({
      where: { user_id: userId }
    });

    res.json(balances);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};