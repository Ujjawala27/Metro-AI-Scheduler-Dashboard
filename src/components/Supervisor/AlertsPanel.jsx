import { useTrainContext } from "../../context/TrainContext";
import { useAudit } from "../../context/AuditContext";

function AlertsPanel() {
  const { maintenanceReports, resolveMaintenanceReport } = useTrainContext();

  const { addLog } = useAudit();

  const sortedReports = [...maintenanceReports].sort((a, b) => {
    const severityOrder = {
      High: 3,
      Medium: 2,
      Low: 1,
    };

    return severityOrder[b.severity] - severityOrder[a.severity];
  });

  const getAlertStyle = (severity) => {
    switch (severity) {
      case "High":
        return {
          border: "border-red-500",
          bg: "bg-red-50",
          text: "text-red-700",
          icon: "🔴",
        };

      case "Medium":
        return {
          border: "border-yellow-500",
          bg: "bg-yellow-50",
          text: "text-yellow-700",
          icon: "🟡",
        };

      default:
        return {
          border: "border-green-500",
          bg: "bg-green-50",
          text: "text-green-700",
          icon: "🟢",
        };
    }
  };

  const handleResolve = (report, originalIndex) => {
    resolveMaintenanceReport(originalIndex);

    addLog(
      `Maintenance issue resolved for Train ${report.trainId} (${report.issue})`
    );
  };

  return (
    <div className="bg-white shadow rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Alerts & Notifications</h2>

        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
          {maintenanceReports.length} Alerts
        </span>
      </div>

      {maintenanceReports.length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          ✅ No Active Alerts
        </div>
      ) : (
        <ul className="space-y-3 max-h-96 overflow-y-auto">
          {sortedReports.map((report, index) => {
            const style = getAlertStyle(report.severity);

            return (
              <li
                key={index}
                className={`border-l-4 ${style.border} ${style.bg} rounded-r-lg p-3`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">
                      {style.icon} Train {report.trainId}
                    </p>

                    <p className="text-sm mt-1">{report.issue}</p>

                    <p className={`text-sm font-medium mt-1 ${style.text}`}>
                      Severity: {report.severity}
                    </p>

                    <button
                      onClick={() => handleResolve(report, index)}
                      className="mt-3 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Mark Resolved
                    </button>
                  </div>

                  {report.timestamp && (
                    <span className="text-xs text-gray-500">
                      {report.timestamp}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default AlertsPanel;
