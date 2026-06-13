import { useTrainContext } from "../../context/TrainContext";
import ExportButton from "../common/ExportButton";

function MaintenanceExport() {
  const { maintenanceReports } = useTrainContext();

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Maintenance Reports</h2>

      <ExportButton
        data={maintenanceReports}
        filename="maintenance-reports.csv"
        label="Export Maintenance Report"
      />
    </div>
  );
}

export default MaintenanceExport;
