import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: event.target.title.value,
      amount: event.target.amount.value,
      date: new Date(event.target.date.value),
    };

    console.log(expenseData);

    for (let element of event.target.elements) {
      element.value = "";
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" name="title" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" name="amount" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" name="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
