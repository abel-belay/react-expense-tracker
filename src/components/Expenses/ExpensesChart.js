import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const { expenses } = props;

  const monthExpenses = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let expense of expenses) {
    const month = expense.date.getMonth();
    monthExpenses[month].value += expense.amount;
  }

  const maxValue = Math.max(
    ...monthExpenses.map((monthExpense) => monthExpense.value)
  );

  return <Chart chartData={monthExpenses} maxValue={maxValue} />
}

export default ExpensesChart;