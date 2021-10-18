const NewExpenseButton = (props) => {
  const showFormButtonClickHandler = () => {
    props.onShowFormButtonClick();
  }

  return <button onClick={showFormButtonClickHandler}>Add Expense</button>
}

export default NewExpenseButton;