import React from "react";
import ExportButton from "../common/ExportButton";

function DeploymentTable({ trains }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tomorrow's Deployment Plan</h2>

        <ExportButton
          data={trains}
          filename="deployment-plan.csv"
          label="Export Plan"
        />

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {trains.length} Trains Selected
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-3">Train ID</th>

              <th className="text-left p-3">Mileage</th>

              <th className="text-left p-3">Status</th>

              <th className="text-left p-3">Branding</th>

              <th className="text-left p-3">AI Score</th>
            </tr>
          </thead>

          <tbody>
            {trains.map((train) => (
              <tr key={train.id} className="border-b hover:bg-gray-50">
                <td className="p-3">Train {train.id}</td>

                <td className="p-3">{train.mileage}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      train.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : train.status === "Running"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {train.status}
                  </span>
                </td>

                <td className="p-3">{train.branding}</td>

                <td className="p-3 font-bold text-blue-600">{train.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeploymentTable;
