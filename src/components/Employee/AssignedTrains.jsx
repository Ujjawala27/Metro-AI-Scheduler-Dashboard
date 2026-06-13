import trains from "../../data/trains";

export default function AssignedTrains() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Assigned Trains</h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Train</th>
            <th className="text-left py-2">Route</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {trains.map((train) => (
            <tr key={train.id} className="border-b">
              <td className="py-2">Train {train.id}</td>

              <td>{train.route}</td>

              <td>{train.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
