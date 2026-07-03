import CommonCard from "../components/common/CommonCard";
import CommonChart from "../components/common/CommonChart";

import {
  multiAxisData,
  pieChartData,
  salesChartData,
  userChartData,
} from "../data/chartdata";

import { companies } from "../data/cardData";

function Dashboard() {
  return (
    <div>
      <div className="cards-container">
        {companies.map((company, index) => (
          <CommonCard key={index} company={company} />
        ))}
      </div> 

     <br />

      <div className="charts-container">
        <CommonChart
          title={salesChartData.title}
          labels={salesChartData.labels}
          datasets={salesChartData.datasets}
          options={salesChartData.options}
        />
        <br />
        <CommonChart
          title={userChartData.title}
          labels={userChartData.labels}
          datasets={userChartData.datasets}
          options={userChartData.options}
        />
      </div>
      <br />

      <div className="charts-container">
        <CommonChart
          title={pieChartData.title}
          labels={pieChartData.labels}
          datasets={pieChartData.datasets}
          options={pieChartData.options}
        />
        <CommonChart
          title={multiAxisData.title}
          labels={multiAxisData.labels}
          datasets={multiAxisData.datasets}
          options={multiAxisData.options}
        />
      </div>
    </div>
  );
}

export default Dashboard;
