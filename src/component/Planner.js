import React from "react";
import Budget from "./Budget";
import Remaining from "./Remaining";
import Spending from "./Spending";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";
import { Card, Form, Box } from "../styles/PlannerStyling";
import { AppProvider } from "../context/AppContext";

function Planner() {
  return (
    <AppProvider>
      <Form>
        <Box>
          <h1>Budget Planner</h1>
          <div className="box">
            <div>
              <Budget />
            </div>
            <div>
              <Remaining />
            </div>
            <div>
              <Spending />
            </div>
          </div>
        </Box>

        <div className="budget-display">
          <Card width="500px" height="550px">
            <div className="card">
              <p>Expenses</p>
              <ExpenseList />
            </div>
          </Card>

          <Card width="450px" height="450px">
            <div className="card">
              <p>Add Expense</p>
              <AddExpenseForm />
            </div>
          </Card>
        </div>
      </Form>
    </AppProvider>
  );
}

export default Planner;
