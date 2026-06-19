import { useTrainContext } from "../../context/TrainContext";
import { generateNotifications } from "../../utils/notificationEngine";

function NotificationsCenter() {
  const { trains } = useTrainContext();

  const notifications = generateNotifications(trains);

  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h2 className="text-xl font-semibold mb-4">Notifications Center</h2>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications.</p>
        ) : (
          notifications.map((note, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border ${
                note.type === "danger"
                  ? "bg-red-50 border-red-200"
                  : note.type === "warning"
                  ? "bg-yellow-50 border-yellow-200"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <h3 className="font-semibold">{note.title}</h3>

              <p className="text-sm text-gray-700">{note.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationsCenter;
