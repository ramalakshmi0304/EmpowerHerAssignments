// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 text-center text-gray-500 bg-gray-100">
      &copy; {new Date().getFullYear()} Todos App. All rights reserved.
    </footer>
  );
}
