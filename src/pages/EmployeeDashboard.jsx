import { useState } from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { useTrainContext } from "../context/TrainContext";

function EmployeeDashboard() {
  const {
    trains,
    shifts,
    addShift,
    maintenanceReports,
    addMaintenanceReport,
    brandingUpdates,
    addBrandingUpdate,
  } = useTrainContext();

  // ----------------------------
  // Shift Form
  // ----------------------------

  const handleShiftSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    addShift({
      empId: form.get("empId"),
      trainId: form.get("trainId"),
      shiftTime: form.get("shiftTime"),
    });

    e.target.reset();
  };

  // ----------------------------
  // Maintenance Form
  // ----------------------------

  const handleMaintenanceSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    addMaintenanceReport({
      trainId: form.get("trainId"),
      issue: form.get("issue"),
      severity: form.get("severity"),
    });

    e.target.reset();
  };

  // ----------------------------
  // Branding Form
  // ----------------------------

  const handleBrandingSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    addBrandingUpdate({
      trainId: form.get("trainId"),
      sponsor: form.get("sponsor"),
      mandatory: form.get("mandatory") === "on",
    });

    e.target.reset();
  };

  return (
    <DashboardLayout title="Employee Dashboard">
      <div id="shifts" className="grid lg:grid-cols-3 gap-6">
        {/* Shift Scheduling */}

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Shift Scheduling</h2>

          <form onSubmit={handleShiftSubmit} className="space-y-3">
            <input
              name="empId"
              placeholder="Employee ID"
              className="w-full border p-2 rounded"
              required
            />

            <select
              name="trainId"
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select Train</option>

              {trains.map((train) => (
                <option key={train.id} value={train.id}>
                  Train {train.id}
                </option>
              ))}
            </select>

            <input
              name="shiftTime"
              placeholder="06:00 - 14:00"
              className="w-full border p-2 rounded"
              required
            />

            <button className="w-full bg-blue-600 text-white p-2 rounded">
              Add Shift
            </button>
          </form>

          <div className="mt-4">
            <h3 className="font-semibold">Recorded Shifts</h3>

            <ul className="mt-2 text-sm space-y-1">
              {shifts
                .filter((shift) => !shift.approved)
                .map((shift, index) => (
                  <li key={index}>
                    Employee {shift.empId}
                    {" → "}
                    Train {shift.trainId}
                    {" ("}
                    {shift.shiftTime}
                    {")"}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Maintenance */}

        <div id="maintenance" className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Maintenance Reporting</h2>

          <form onSubmit={handleMaintenanceSubmit} className="space-y-3">
            <select
              name="trainId"
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select Train</option>

              {trains.map((train) => (
                <option key={train.id} value={train.id}>
                  Train {train.id}
                </option>
              ))}
            </select>

            <input
              name="issue"
              placeholder="Issue"
              className="w-full border p-2 rounded"
              required
            />

            <select name="severity" className="w-full border p-2 rounded">
              <option>Low</option>

              <option>Medium</option>

              <option>High</option>
            </select>

            <button className="w-full bg-orange-500 text-white p-2 rounded">
              Submit Report
            </button>
          </form>

          <div className="mt-4">
            <h3 className="font-semibold">Reports</h3>

            <ul className="mt-2 text-sm space-y-1">
              {maintenanceReports.map((report, index) => (
                <li key={index}>
                  Train {report.trainId}
                  {" - "}
                  {report.issue}
                  {" ("}
                  {report.severity}
                  {")"}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Branding */}

        <div id="branding" className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Branding Updates</h2>

          <form onSubmit={handleBrandingSubmit} className="space-y-3">
            <select
              name="trainId"
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select Train</option>

              {trains.map((train) => (
                <option key={train.id} value={train.id}>
                  Train {train.id}
                </option>
              ))}
            </select>

            <input
              name="sponsor"
              placeholder="Sponsor Name"
              className="w-full border p-2 rounded"
              required
            />

            <label className="flex gap-2">
              <input type="checkbox" name="mandatory" />
              Mandatory Branding
            </label>

            <button className="w-full bg-green-600 text-white p-2 rounded">
              Save Update
            </button>
          </form>

          <div className="mt-4">
            <h3 className="font-semibold">Updates</h3>

            <ul className="mt-2 text-sm space-y-1">
              {brandingUpdates
                .filter((update) => !update.approved)
                .map((update, index) => (
                  <li key={index}>
                    Train {update.trainId}
                    {" - "}
                    {update.sponsor}
                    {update.mandatory ? " (Mandatory)" : ""}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default EmployeeDashboard;
