function BrandingInsights({ trains }) {
  const brandedTrains = trains.filter((train) => train.branding !== "None");

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Branding Insights</h2>

      <p className="mb-3">Active Branding: {brandedTrains.length}</p>

      <div className="space-y-2">
        {brandedTrains.slice(0, 5).map((train) => (
          <div key={train.id} className="border-b pb-2">
            <p>Train {train.id}</p>

            <p className="text-sm text-gray-500">Sponsor: {train.branding}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandingInsights;
