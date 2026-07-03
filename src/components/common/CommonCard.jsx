import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import "../../styles/CommonCard.css";

export default function CommonCard({ company }) {
  return (
    <Card className="company-card">
      <div className="company-info">
        <img
          src={company.logo}
          alt={company.name}
          className="company-logo"
        />

        <div>
          <h3>{company.name}</h3>
          <p>{company.fullName}</p>
        </div>
      </div>

      <div className="company-footer">
        <span className="price">${company.price}</span>

        <span
          className={`percentage ${
            company.status === "up" ? "positive" : "negative"
          }`}
        >
          <i
            className={`pi ${
              company.status === "up"
                ? "pi-arrow-up"
                : "pi-arrow-down"
            }`}
          />
          {company.percentage}%
        </span>
      </div>
    </Card>
  );
}