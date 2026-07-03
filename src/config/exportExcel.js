import * as XLSX from "xlsx";
export const exportExcel = (data, title) => {
  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Chart Data");

  XLSX.writeFile(workbook, `${title}.xlsx`);
};
