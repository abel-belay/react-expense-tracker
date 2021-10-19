import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const {chartData, maxValue} = props;

  const chartBarComponents = chartData.map((dataPoint) => {
    return (
      <ChartBar {...dataPoint} maxValue={maxValue} key={dataPoint.label} />
    );
  });

  return <div className="chart">{chartBarComponents}</div>;
};

export default Chart;
