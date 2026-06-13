import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("metroUsers");

    return storedUsers
      ? JSON.parse(storedUsers)
      : [
          {
            username: "admin",
            password: "admin123",
            role: "Admin",
          },
          {
            username: "supervisor",
            password: "supervisor123",
            role: "Supervisor",
          },
          {
            username: "employee",
            password: "employee123",
            role: "Employee",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("metroUsers", JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const deleteUser = (username) => {
    setUsers((prev) => prev.filter((user) => user.username !== username));
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
