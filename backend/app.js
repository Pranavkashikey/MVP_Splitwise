const express = require("express");
const app = express();
const sequelize = require("./config/database");
app.use(express.json());
const User = require("./models/user");
const Expense = require("./models/expense");
const Balance = require("./models/balance");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

app.use("/users",userRoutes);
app.use("/expenses",expenseRoutes);
app.get("/", (req,res)=>{
    res.send("Splitwise Backend Running");
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});

sequelize.sync().then(()=>{
    console.log("Database connected");
});