import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Remaining() {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <>
      <p>
        Remaining <span>${budget - totalExpenses}</span>
      </p>
    </>
  );
}

export default Remaining;
