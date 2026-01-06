// src/components/Navbar.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";

const Navbar = ({ filter, setFilter }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold">Todos App</h1>

      <div className="flex items-center gap-4">
        {/* Filter buttons */}
        <div className="flex gap-2">
          <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>All</Button>
          <Button variant={filter === "completed" ? "default" : "outline"} onClick={() => setFilter("completed")}>Completed</Button>
          <Button variant={filter === "pending" ? "default" : "outline"} onClick={() => setFilter("pending")}>Pending</Button>
        </div>

        {/* Auth button */}
        {user && (
          <Button variant="destructive" onClick={logout}>
            Sign Out
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
