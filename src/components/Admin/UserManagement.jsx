import { useState } from "react";
import { useUserContext } from "../../context/UserContext";

function UserManagement() {
  const { users, addUser, deleteUser } = useUserContext();

  const [username, setUsername] = useState("");

  const [role, setRole] = useState("Employee");

  const handleSubmit = (e) => {
    e.preventDefault();

    addUser({
      username,
      password: "password123",
      role,
    });

    setUsername("");
    setRole("Employee");
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>

      <table className="w-full mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Username</th>

            <th className="p-3">Role</th>

            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.username} className="border-b">
              <td className="p-3">{user.username}</td>

              <td className="p-3">{user.role}</td>

              <td className="p-3">
                <button
                  onClick={() => deleteUser(user.username)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded flex-1"
          required
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded"
        >
          <option>Employee</option>

          <option>Supervisor</option>

          <option>Admin</option>
        </select>

        <button className="bg-blue-600 text-white px-4 rounded">
          Add User
        </button>
      </form>
    </div>
  );
}

export default UserManagement;
