const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseController");

router.post("/", expenseController.addExpense);
router.get("/activity", expenseController.getActivity);

module.exports = router;