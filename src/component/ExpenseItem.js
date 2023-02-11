import { Budget } from "../styles/PlannerStyling";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <Budget>
      <li>
        <div>
          <h2>{props.name}</h2>
          <h3>${props.cost}</h3>
          <div className="delete-btn" onClick={handleDelete}>
            &#10006;
          </div>
        </div>
      </li>
    </Budget>
  );
}

export default ExpenseItem;
