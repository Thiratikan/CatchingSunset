import React from "react";

function ViewBudget(props) {
  return (
    <>
      <p>
        Budget <span> ${props.budget} </span>
        <button type="button" onClick={props.handleEditClick}>
          Edit
        </button>
      </p>
    </>
  );
}

export default ViewBudget;
