import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import NewExpenseButton from "./NewExpenseButton";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const newExpenseHandler = (newExpense) => {
    props.onNewExpense(newExpense);
    setShowForm(false);
  };

  const showFormButtonClickHandler = () => {
    setShowForm(true);
  };
  const hideFormButtonClickHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onNewExpense={newExpenseHandler}
          onHideFormButtonClick={hideFormButtonClickHandler}
        />
      )}
      {!showForm && (
        <NewExpenseButton onShowFormButtonClick={showFormButtonClickHandler} />
      )}
    </div>
  );
};

export default NewExpense;
