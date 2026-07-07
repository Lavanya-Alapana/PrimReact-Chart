import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import "./../styles/PageHeader.css";

export default function PageHeader({ title }) {
  const filters = [
    { name: "Today" },
    { name: "This Week" },
    { name: "This Month" },
    { name: "This Year" },
  ];

  return (
    <div className="page-header">
      <div>
        <h2>{title}</h2>
        <small>/ {title}</small>
      </div>

      <div className="page-actions">
        <Dropdown options={filters} optionLabel="name" placeholder="Filter" />

        <Button
          icon="pi pi-download"
          // label="Export"
          outlined
        />

        <Button icon="pi pi-refresh" rounded text />
      </div>
    </div>
  );
}
