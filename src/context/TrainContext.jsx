import { createContext, useContext, useState, useEffect } from "react";

const TrainContext = createContext();

const generateDemoTrains = () => {
  return Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,

    mileage: Math.floor(Math.random() * 1000 + 500),

    status:
      Math.random() > 0.8
        ? "Maintenance"
        : Math.random() > 0.5
        ? "Running"
        : "Available",

    branding:
      Math.random() > 0.5
        ? ["KFC", "Jio", "Airtel", "Coca Cola"][Math.floor(Math.random() * 4)]
        : "None",

    cleaning: Math.random() > 0.7 ? "Pending" : "Done",

    maintenance: Math.random() > 0.8,

    score: Math.floor(Math.random() * 40 + 60),
  }));
};

export const TrainProvider = ({ children }) => {
  const [trains, setTrains] = useState(() => {
    const saved = localStorage.getItem("trains");

    return saved ? JSON.parse(saved) : generateDemoTrains();
  });

  const [shifts, setShifts] = useState([]);

  const [maintenanceReports, setMaintenanceReports] = useState([]);

  const [brandingUpdates, setBrandingUpdates] = useState([]);

  // Save trains automatically
  useEffect(() => {
    localStorage.setItem("trains", JSON.stringify(trains));
  }, [trains]);

  // ---------------------
  // Train Functions
  // ---------------------

  const addTrain = (newTrain) => {
    setTrains((prev) => [...prev, newTrain]);
  };

  const deleteTrain = (id) => {
    setTrains((prev) => prev.filter((train) => train.id !== id));
  };

  const updateTrain = (updatedTrain) => {
    setTrains((prev) =>
      prev.map((train) => (train.id === updatedTrain.id ? updatedTrain : train))
    );
  };

  // ---------------------
  // Employee Functions
  // ---------------------

  const addShift = (shift) => {
    setShifts((prev) => [...prev, shift]);
  };

  const addMaintenanceReport = (report) => {
    setMaintenanceReports((prev) => [...prev, report]);
  };

  const addBrandingUpdate = (update) => {
    setBrandingUpdates((prev) => [...prev, update]);
  };

  return (
    <TrainContext.Provider
      value={{
        trains,
        addTrain,
        deleteTrain,
        updateTrain,

        shifts,
        addShift,

        maintenanceReports,
        addMaintenanceReport,

        brandingUpdates,
        addBrandingUpdate,
      }}
    >
      {children}
    </TrainContext.Provider>
  );
};

export const useTrainContext = () => {
  const context = useContext(TrainContext);

  if (!context) {
    throw new Error("useTrainContext must be used inside TrainProvider");
  }

  return context;
};
