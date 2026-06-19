import { calculateRisk } from "./predictiveMaintenance";

export const generateNotifications = (trains) => {
  const notifications = [];

  trains.forEach((train) => {
    const { risk } = calculateRisk(train);

    // High Risk Alert
    if (risk >= 70) {
      notifications.push({
        type: "danger",
        title: `Train ${train.id} High Risk`,
        message: "Immediate maintenance recommended.",
      });
    }

    // Cleaning Alert
    if (train.cleaning === "Pending") {
      notifications.push({
        type: "warning",
        title: `Train ${train.id} Cleaning Pending`,
        message: "Cleaning must be completed before deployment.",
      });
    }

    // Deployment Ready
    if (
      train.status === "Available" &&
      train.cleaning === "Done" &&
      risk < 40
    ) {
      notifications.push({
        type: "success",
        title: `Train ${train.id} Ready`,
        message: "Available for deployment.",
      });
    }
  });

  return notifications;
};
