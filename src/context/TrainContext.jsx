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
  // ------------------------
  // Trains
  // ------------------------

  const [trains, setTrains] = useState(() => {
    const saved = localStorage.getItem("trains");

    return saved ? JSON.parse(saved) : generateDemoTrains();
  });

  // ------------------------
  // Shifts
  // ------------------------

  const [shifts, setShifts] = useState(() => {
    const saved = localStorage.getItem("shifts");

    return saved ? JSON.parse(saved) : [];
  });

  // ------------------------
  // Maintenance Reports
  // ------------------------

  const [maintenanceReports, setMaintenanceReports] = useState(() => {
    const saved = localStorage.getItem("maintenanceReports");

    return saved ? JSON.parse(saved) : [];
  });

  // ------------------------
  // Branding Updates
  // ------------------------

  const [brandingUpdates, setBrandingUpdates] = useState(() => {
    const saved = localStorage.getItem("brandingUpdates");

    return saved ? JSON.parse(saved) : [];
  });

  // ------------------------
  // Local Storage Persistence
  // ------------------------

  useEffect(() => {
    localStorage.setItem("trains", JSON.stringify(trains));
  }, [trains]);

  useEffect(() => {
    localStorage.setItem("shifts", JSON.stringify(shifts));
  }, [shifts]);

  useEffect(() => {
    localStorage.setItem(
      "maintenanceReports",
      JSON.stringify(maintenanceReports)
    );
  }, [maintenanceReports]);

  useEffect(() => {
    localStorage.setItem("brandingUpdates", JSON.stringify(brandingUpdates));
  }, [brandingUpdates]);

  // ------------------------
  // Train Functions
  // ------------------------

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

  // ------------------------
  // Shift Functions
  // ------------------------

  const addShift = (shift) => {
    setShifts((prev) => [
      ...prev,
      {
        ...shift,
        approved: false,
      },
    ]);
  };

  const approveShift = (index) => {
    setShifts((prev) =>
      prev.map((shift, i) =>
        i === index
          ? {
              ...shift,
              approved: true,
            }
          : shift
      )
    );
  };

  // ------------------------
  // Maintenance Functions
  // ------------------------

  const addMaintenanceReport = (report) => {
    setMaintenanceReports((prev) => [
      ...prev,
      {
        ...report,
        timestamp: new Date().toLocaleString(),
      },
    ]);
  };

  const resolveMaintenanceReport = (index) => {
    setMaintenanceReports((prev) => prev.filter((_, i) => i !== index));
  };

  // ------------------------
  // Branding Functions
  // ------------------------

  const addBrandingUpdate = (update) => {
    setBrandingUpdates((prev) => [
      ...prev,
      {
        ...update,
        approved: false,
      },
    ]);
  };

  const approveBrandingUpdate = (index) => {
    setBrandingUpdates((prev) =>
      prev.map((update, i) =>
        i === index
          ? {
              ...update,
              approved: true,
            }
          : update
      )
    );
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
        approveShift,

        maintenanceReports,
        addMaintenanceReport,
        resolveMaintenanceReport,

        brandingUpdates,
        addBrandingUpdate,
        approveBrandingUpdate,
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
