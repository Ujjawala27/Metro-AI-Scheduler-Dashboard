function AlertsPanel({ maintenanceReports }) {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h2 className="text-xl font-semibold mb-4">Alerts & Notifications</h2>

      {maintenanceReports.length === 0 ? (
        <p className="text-gray-500">No active alerts</p>
      ) : (
        <ul className="space-y-3">
          {maintenanceReports.map((report, index) => (
            <li key={index} className="border-l-4 border-red-500 pl-3">
              <p className="font-semibold">Train {report.trainId}</p>

              <p>{report.issue}</p>

              <p className="text-sm text-gray-500">
                Severity: {report.severity}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlertsPanel;
