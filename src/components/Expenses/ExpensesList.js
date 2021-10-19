import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { expenses } = props;

  const expenseComponents = expenses.map((expense) => {
    return <ExpenseItem key={expense.id} {...expense}></ExpenseItem>;
  });

  if (expenseComponents.length) {
    return <ul className="expenses-list">{expenseComponents}</ul>;
  } else {
    return <p className="expenses-list__fallback">No Expenses Found</p>;
  }
};

export default ExpensesList;
