import { useAudit } from "../../context/AuditContext";

function AuditLogPanel() {
  const { logs } = useAudit();

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Audit Logs</h2>

      {logs.length === 0 ? (
        <p className="text-gray-500">No activity recorded</p>
      ) : (
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {logs.map((log) => (
            <div key={log.id} className="border-l-4 border-blue-500 pl-3 py-1">
              <p className="text-sm font-medium">{log.action}</p>

              <p className="text-xs text-gray-500">{log.timestamp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AuditLogPanel;
