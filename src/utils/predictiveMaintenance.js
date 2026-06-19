export const calculateRisk = (train) => {
  let risk = 0;

  // Mileage Risk
  if (train.mileage > 1400) {
    risk += 50;
  } else if (train.mileage > 1200) {
    risk += 35;
  } else if (train.mileage > 1000) {
    risk += 20;
  }

  // Cleaning Risk
  if (train.cleaning === "Pending") {
    risk += 20;
  }

  // Maintenance Risk
  if (train.status === "Maintenance") {
    risk += 30;
  }

  // Branding Risk
  if (train.branding !== "None") {
    risk += 5;
  }

  risk = Math.min(risk, 100);

  let level = "Low";

  if (risk >= 70) {
    level = "High";
  } else if (risk >= 40) {
    level = "Medium";
  }

  return {
    risk,
    level,
  };
};

export const getHighRiskTrains = (trains) => {
  return trains
    .map((train) => ({
      ...train,
      ...calculateRisk(train),
    }))
    .sort((a, b) => b.risk - a.risk);
};
