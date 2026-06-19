import { createContext, useContext, useState } from "react";

const AuditContext = createContext();

export const AuditProvider = ({ children }) => {
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem("auditLogs");
    return saved ? JSON.parse(saved) : [];
  });

  const addLog = (action) => {
    const newLog = {
      id: Date.now(),
      action,
      timestamp: new Date().toLocaleString(),
    };

    const updatedLogs = [newLog, ...logs];

    setLogs(updatedLogs);

    localStorage.setItem("auditLogs", JSON.stringify(updatedLogs));
  };

  return (
    <AuditContext.Provider
      value={{
        logs,
        addLog,
      }}
    >
      {children}
    </AuditContext.Provider>
  );
};

export const useAudit = () => {
  return useContext(AuditContext);
};
