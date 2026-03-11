Splitwise MVP Backend

A simple backend implementation of a Splitwise-like expense sharing system built using Node.js, Express, Sequelize, and SQLite.
This project allows users to create accounts, add shared expenses, split costs among members, track balances, and receive monthly balance reports.

###Tech Stack

Node.js

Express.js

Sequelize ORM

SQLite

Nodemailer (for email reports)

node-cron (for monthly email scheduling)

###Postman (API testing)

###Features
Users

Create user

View user profile

Update user email and currency

Delete user account

Expenses

Add a new expense

Split expense among multiple members

View all expenses

Update expense

Delete expense

Activity log (filter expenses by date range)

Expense Splitting

Expenses are split equally among members.

Example:

Expense Value:

1000
Members: [1,2,3,4]

Each member share:

1000 / 4 = 250

Balances are automatically created.

Balances

Users can view their balances with other users.

Example balance record:

User 2 owes User 1 → 250
User 3 owes User 1 → 250
User 4 owes User 1 → 250
Monthly Email Report

Every month a report is sent to users containing their balance summary.

Implemented using:

node-cron

nodemailer

Cron Schedule:

0 0 1 * *

Runs on 1st day of every month at 12 AM.

###Project Structure
backend
│
├── controllers
│     userController.js
│     expenseController.js
│
├── models
│     user.js
│     expense.js
│     expenseMember.js
│     balance.js
│
├── routes
│     userRoutes.js
│     expenseRoutes.js
│     balanceRoutes.js
│
├── services
│     emailService.js
│     reportService.js
│
├── cron
│     monthlyReport.js
│
├── config
│     database.js
│
├── app.js
└── package.json
Installation

Clone the repository

git clone <repo-url>
cd splitwise-backend

Install dependencies

npm install

Run the server

node app.js

Server will run on:

http://localhost:3000
API Endpoints
Users
POST   /users
GET    /users/:id
PUT    /users/:id
DELETE /users/:id
Expenses
POST   /expenses
GET    /expenses
PUT    /expenses/:id
DELETE /expenses/:id
GET    /expenses/activity
Balances
GET /balances/:userId
Postman Collection

The Postman collection for testing APIs is included in the repository.

Database Schema
Users
id
email
password
currency
Expenses
id
name
value
currency
created_by
date
ExpenseMembers
expense_id
user_id
share
Balances
user_id
owes_to
amount
Example Flow

Create users

Add expense with members

Expense gets split equally

Balances are calculated automatically

Users can check balances

Monthly email report is generated

Future Improvements

JWT Authentication

Expense split types (percentage, exact amounts)

Balance optimization algorithm

Notifications system

Author

Pranav Kashikey
B.Tech Mechanical Engineering
MNNIT Allahabad
