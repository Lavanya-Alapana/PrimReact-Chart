import { Chart } from "primereact/chart";
import * as XLSX from "xlsx";
import { getYAxisScale } from "../../config/chartConfig";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { exportExcel } from "../../config/exportExcel";

function CommonChart({ type, title, labels, datasets, options = {} }) {
  const chartData = {
    labels,
    datasets,
  };

  const hasAxis = datasets.some(
    (dataset) => !["pie", "doughnut"].includes(dataset.type),
  );
  const chartOptions = hasAxis
    ? {
        ...options,
        scales: {
          ...options.scales,
          y: {
            ...options.scales?.y,
            ...getYAxisScale(datasets, 5),
          },
        },
      }
    : options;

  const exportData = labels.map((label, index) => {
    const row = {
      Label: label,
    };

    datasets.forEach((item) => {
      row[item.label] = item.data[index];
    });

    return row;
  });

  const handleExport = () => {
    exportExcel(exportData, title);
  };
  console.log(chartData);
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <div className="excel-button">
        <Button
          icon="pi pi-download"
          onClick={handleExport}
          tooltip="Export Excel"
        />
      </div>

      <Chart type={datasets[0]?.type} data={chartData} options={chartOptions} />
    </div>
  );
}

export default CommonChart;
