import React, { useState } from "react";
import { Box } from "../styles/ExpenseFormStyle";

function EditBudget(props) {
  const [value, setValue] = useState(props.budget);
  return (
    <Box>
      <p>
        Budget
        <input
          required
          type="number"
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="$"
        />
        <button type="button" onClick={() => props.handleSaveClick(value)}>
          Save
        </button>
      </p>
    </Box>
  );
}

export default EditBudget;
