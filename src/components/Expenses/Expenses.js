import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        yearFilter={yearFilter}
        onNewYearFilter={newYearFilterHandler}
      />
      <ExpensesChart expenses={expensesYearFilter} />
      <ExpensesList expenses={expensesYearFilter} />
    </Card>
  );
};

export default Expenses;
