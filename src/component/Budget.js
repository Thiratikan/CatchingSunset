import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

function Budget() {
  const { budget, dispatch } = useContext(AppContext);
  const [edit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setEdit(false);
  };
  return (
    <>
      {edit ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </>
  );
}

export default Budget;
