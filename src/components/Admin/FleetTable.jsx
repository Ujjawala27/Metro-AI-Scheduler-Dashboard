import { useState } from "react";
import { useTrainContext } from "../../context/TrainContext";
import ExportButton from "../common/ExportButton";
import { useAudit } from "../../context/AuditContext";

function FleetTable() {
  const { trains, deleteTrain, updateTrain } = useTrainContext();

  const { addLog } = useAudit();

  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({});

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const handleEdit = (train) => {
    setEditingId(train.id);
    setEditData(train);
  };

  const handleSave = () => {
    updateTrain(editData);

    addLog(`Admin updated Train ${editData.id}`);

    setEditingId(null);
  };

  const filteredTrains = trains.filter((train) => {
    const matchesSearch = train.id.toString().includes(searchTerm);

    const matchesStatus =
      statusFilter === "All" ? true : train.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Fleet Management</h2>
      <div className="flex justify-between items-center mb-4">
        <ExportButton
          data={trains}
          filename="fleet-report.csv"
          label="Download Fleet Report"
        />
      </div>

      {/* Search + Filter */}

      <div className="flex flex-col md:flex-row gap-3 mb-5">
        <input
          type="text"
          placeholder="Search Train ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded flex-1"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Status</option>

          <option value="Available">Available</option>

          <option value="Running">Running</option>

          <option value="Maintenance">Maintenance</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Train</th>

              <th className="p-3">Mileage</th>

              <th className="p-3">Status</th>

              <th className="p-3">Branding</th>

              <th className="p-3">Cleaning</th>

              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTrains.map((train) => (
              <tr key={train.id} className="border-b">
                <td className="p-3">Train {train.id}</td>

                <td className="p-3">
                  {editingId === train.id ? (
                    <input
                      type="number"
                      value={editData.mileage}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          mileage: Number(e.target.value),
                        })
                      }
                      className="border p-1 rounded"
                    />
                  ) : (
                    train.mileage
                  )}
                </td>

                <td className="p-3">
                  {editingId === train.id ? (
                    <select
                      value={editData.status}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          status: e.target.value,
                        })
                      }
                      className="border p-1 rounded"
                    >
                      <option>Available</option>

                      <option>Running</option>

                      <option>Maintenance</option>
                    </select>
                  ) : (
                    train.status
                  )}
                </td>

                <td className="p-3">
                  {editingId === train.id ? (
                    <input
                      value={editData.branding}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          branding: e.target.value,
                        })
                      }
                      className="border p-1 rounded"
                    />
                  ) : (
                    train.branding
                  )}
                </td>

                <td className="p-3">
                  {editingId === train.id ? (
                    <select
                      value={editData.cleaning}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          cleaning: e.target.value,
                        })
                      }
                      className="border p-1 rounded"
                    >
                      <option>Done</option>

                      <option>Pending</option>
                    </select>
                  ) : (
                    train.cleaning
                  )}
                </td>

                <td className="p-3 flex gap-2">
                  {editingId === train.id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>

                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-500 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(train)}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          deleteTrain(train.id);

                          addLog(`Admin deleted Train ${train.id}`);
                        }}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FleetTable;
