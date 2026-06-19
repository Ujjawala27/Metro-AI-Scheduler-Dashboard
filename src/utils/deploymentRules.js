export const isTrainDeployable = (train, maintenanceReports) => {
  const trainReports = maintenanceReports.filter(
    (report) => Number(report.trainId) === Number(train.id)
  );

  const hasHighSeverityReport = trainReports.some(
    (report) => report.severity === "High"
  );

  if (hasHighSeverityReport) {
    return {
      deployable: false,
      reason: "High Severity Maintenance Report",
    };
  }

  if (train.status === "Maintenance") {
    return {
      deployable: false,
      reason: "Under Maintenance",
    };
  }

  if (train.cleaning === "Pending") {
    return {
      deployable: false,
      reason: "Cleaning Pending",
    };
  }

  return {
    deployable: true,
    reason: "Ready For Deployment",
  };
};
