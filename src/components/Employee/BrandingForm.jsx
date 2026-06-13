import { useState } from "react";

export default function BrandingForm() {
  const [updates, setUpdates] = useState([]);

  const saveUpdate = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const update = {
      trainId: form.get("trainId"),
      sponsor: form.get("sponsor"),
    };

    setUpdates([...updates, update]);

    e.target.reset();
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Branding Updates</h2>

      <form onSubmit={saveUpdate} className="space-y-3">
        <input
          name="trainId"
          placeholder="Train Number"
          className="w-full border p-2 rounded"
        />

        <input
          name="sponsor"
          placeholder="Sponsor Name"
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Save Update
        </button>
      </form>

      <div className="mt-4">
        {updates.map((u, index) => (
          <p key={index}>
            Train {u.trainId} → {u.sponsor}
          </p>
        ))}
      </div>
    </div>
  );
}
