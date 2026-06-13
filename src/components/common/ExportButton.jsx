import { exportToCSV } from "../../utils/exportCSV";

function ExportButton({ data, filename, label }) {
  return (
    <button
      onClick={() => exportToCSV(data, filename)}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
    >
      {label}
    </button>
  );
}

export default ExportButton;
