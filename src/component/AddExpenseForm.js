import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import { ExpenseStyle } from "../styles/PlannerStyling";

function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <ExpenseStyle>
      <form onSubmit={onSubmit}>
        <div>
          <input
            placeholder="Name"
            required
            type="text"
            id="cost"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div>
          <input
            placeholder="Cost"
            required
            type="text"
            id="cost"
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>

        <button type="submit">Save</button>
      </form>
    </ExpenseStyle>
  );
}

export default AddExpenseForm;
