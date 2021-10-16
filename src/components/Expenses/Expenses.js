import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const { expenses } = props;
  const expenseComponents = expenses.map((expense, index) => (
    <ExpenseItem {...expense} key={index}></ExpenseItem>
  ));

  return <Card className="expenses">{expenseComponents}</Card>;
}

export default Expenses;
