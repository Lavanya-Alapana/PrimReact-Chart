import { plugins, scales } from "chart.js";
import CommonChart from "../components/common/CommonChart";
import { useCartItems, useProductsChart } from "../hooks/useProduct";

export default function Product() {
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useProductsChart();

  const {
    data: carts,
    isLoading: cartsLoading,
    error: cartsError,
  } = useCartItems();

  if (productsLoading || cartsLoading) {
    return <h2>Loading...</h2>;
  }

  if (productsError || cartsError) {
    return <h2>Something went wrong.</h2>;
  }

  const productChart = {
    labels: products.map((item) => item.title),
    datasets: [
      {
        type: "bar",
        label: "Price ($)",
        backgroundColor: "#3B82F6",
        data: products.map((item) => item.price),
      },
    ],
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const cartChart = {
    labels: carts.map((cart) => `Cart ${cart.id}`),
    datasets: [
      {
        type: "line",
        label: "Total Amount",
        borderColor: "#10B981",
        backgroundColor: "#10B981",
        data: carts.map((cart) => cart.total),
      },
    ],
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };

  return (
    <>
      <div className="charts-container">
        <CommonChart
          title="Product Prices"
          labels={productChart.labels}
          datasets={productChart.datasets}
          options={productChart.options}
        />
        <CommonChart
          title="Cart Totals"
          labels={cartChart.labels}
          datasets={cartChart.datasets}
          options={cartChart.options}
        />
      </div>
    </>
  );
}
