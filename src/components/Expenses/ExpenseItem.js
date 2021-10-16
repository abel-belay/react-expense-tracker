import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const { amount, date } = props;
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Clicked!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Test</button>
    </Card>
  );
};

export default ExpenseItem;
