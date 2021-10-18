import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const { expenses } = props;

  const [yearFilter, setYearFilter] = useState("2021");
  const newYearFilterHandler = (newYearFilter) => {
    setYearFilter(newYearFilter);
  };

  const expensesYearFilter = expenses.filter(
    (expense) =>
      expense.date.toLocaleString("en-US", { year: "numeric" }) === yearFilter
  );
  const expenseComponents = expensesYearFilter.map((expense, index) => {
    return <ExpenseItem key={expense.id} {...expense}></ExpenseItem>;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        yearFilter={yearFilter}
        onNewYearFilter={newYearFilterHandler}
      />
      <div>{expenseComponents}</div>
    </Card>
  );
};

export default Expenses;
