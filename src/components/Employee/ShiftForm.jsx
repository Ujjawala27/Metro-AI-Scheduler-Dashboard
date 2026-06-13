import { useState } from "react";

export default function ShiftForm() {
  const [shifts, setShifts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const newShift = {
      employeeId: form.get("employeeId"),
      trainId: form.get("trainId"),
      shiftTime: form.get("shiftTime"),
    };

    setShifts([...shifts, newShift]);

    e.target.reset();
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Shift Scheduling</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="employeeId"
          placeholder="Employee ID"
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="trainId"
          placeholder="Train Number"
          className="w-full border p-2 rounded"
          required
        />

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
        {shifts.map((shift, index) => (
          <p key={index}>
            {shift.employeeId} → Train {shift.trainId}
          </p>
        ))}
      </div>
    </div>
  );
}
