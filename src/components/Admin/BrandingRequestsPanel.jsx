import { useTrainContext } from "../../context/TrainContext";
import { useAudit } from "../../context/AuditContext";

function BrandingRequestsPanel() {
  const { brandingUpdates, approveBrandingUpdate } = useTrainContext();

  const { addLog } = useAudit();

  const pendingUpdates = brandingUpdates.filter((update) => !update.approved);

  const handleApprove = (update, index) => {
    approveBrandingUpdate(index);

    addLog(`Admin approved branding update for Train ${update.trainId}`);
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Pending Branding Requests</h2>

      {pendingUpdates.length === 0 ? (
        <p className="text-gray-500">No pending requests</p>
      ) : (
        <div className="space-y-3">
          {pendingUpdates.map((update, index) => (
            <div key={index} className="border rounded-lg p-3">
              <p>
                <strong>Train:</strong> {update.trainId}
              </p>

              <p>
                <strong>Sponsor:</strong> {update.sponsor}
              </p>

              <p>
                <strong>Mandatory:</strong> {update.mandatory ? "Yes" : "No"}
              </p>

              <button
                onClick={() => handleApprove(update, index)}
                className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrandingRequestsPanel;
