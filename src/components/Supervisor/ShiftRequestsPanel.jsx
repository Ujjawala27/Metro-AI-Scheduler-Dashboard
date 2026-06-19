import { useTrainContext } from "../../context/TrainContext";
import { useAudit } from "../../context/AuditContext";

function ShiftRequestsPanel() {
  const { shifts, approveShift } = useTrainContext();

  const { addLog } = useAudit();

  const pendingShifts = shifts.filter((shift) => !shift.approved);

  const handleApprove = (shift, index) => {
    approveShift(index);

    addLog(`Supervisor approved shift for Employee ${shift.empId}`);
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Pending Shift Requests</h2>

      {pendingShifts.length === 0 ? (
        <p className="text-gray-500">No pending requests</p>
      ) : (
        <div className="space-y-3">
          {pendingShifts.map((shift, index) => (
            <div key={index} className="border rounded-lg p-3">
              <p>
                <strong>Employee:</strong> {shift.empId}
              </p>

              <p>
                <strong>Train:</strong> {shift.trainId}
              </p>

              <p>
                <strong>Shift:</strong> {shift.shiftTime}
              </p>

              <button
                onClick={() => handleApprove(shift, index)}
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

export default ShiftRequestsPanel;
