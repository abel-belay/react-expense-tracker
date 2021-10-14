import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const { expenses } = props;
  const expenseComponents = expenses.map((expense, index) => (
    <ExpenseItem {...expense} key={index}></ExpenseItem>
  ));

  return <div className="expenses">{expenseComponents}</div>;
}

export default Expenses;