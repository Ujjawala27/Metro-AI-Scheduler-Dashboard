function AIRanking({ trains }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Top 5 AI Ranked Trains</h2>

      <div className="space-y-3">
        {trains.slice(0, 5).map((train, index) => (
          <div
            key={train.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold">
                #{index + 1} Train {train.id}
              </p>

              <p className="text-sm text-gray-500">
                Mileage: {train.mileage} km
              </p>
            </div>

            <div className="text-green-600 font-bold">{train.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIRanking;
