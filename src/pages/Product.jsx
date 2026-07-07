import CommonChart from "../components/common/CommonChart";
import { useProductsChart } from "../hooks/useProduct";

export default function Product() {
  const { data, isLoading, error } = useProductsChart();

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Error loading data</h2>;

  const chartData = {
    labels: data.map((item) => item.title),
    datasets: [
      {
        type: "bar",
        label: "Price ($)",
        backgroundColor: "#3B82F6",
        data: data.map((item) => item.price),
      },
    ],
  };

  return (
    <CommonChart
      title="Product Prices"
      labels={chartData.labels}
      datasets={chartData.datasets}
    />
  );
}
