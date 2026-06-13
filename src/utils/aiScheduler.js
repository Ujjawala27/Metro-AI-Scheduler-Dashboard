export function rankTrains(trains) {
  return [...trains]
    .map((train) => {
      let score = 100;

      score -= train.mileage / 100;

      if (train.status === "Maintenance") {
        score -= 30;
      }

      if (train.cleaning === "Pending") {
        score -= 15;
      }

      if (train.branding !== "None") {
        score += 5;
      }

      return {
        ...train,
        score: Math.round(score),
      };
    })
    .sort((a, b) => b.score - a.score);
}

export function generateDeploymentPlan(trains, count = 25) {
  const ranked = rankTrains(trains);

  return ranked
    .filter((train) => train.status !== "Maintenance")
    .slice(0, count);
}
