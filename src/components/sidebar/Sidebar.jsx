import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 border-r min-h-screen p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        React Topics
      </h2>

      <nav className="space-y-2 text-sm">
        <NavLink to="/" className="block p-2 rounded hover:bg-blue-100">
          React Intro
        </NavLink>

        <NavLink to="/components" className="block p-2 rounded hover:bg-blue-100">
          Components
        </NavLink>

        <NavLink to="/props" className="block p-2 rounded hover:bg-blue-100">
          Props
        </NavLink>

        <NavLink to="/conditional-rendering" className="block p-2 rounded hover:bg-blue-100">
          Conditional Rendering
        </NavLink>

        <NavLink to="/state" className="block p-2 rounded hover:bg-blue-100">
          React State
        </NavLink>

        <NavLink to="/jsx" className="block p-2 rounded hover:bg-blue-100">
          JSX
        </NavLink>

        <NavLink to="/fragments" className="block p-2 rounded hover:bg-blue-100">
          Fragments
        </NavLink>

        <NavLink to="/events" className="block p-2 rounded hover:bg-blue-100">
          Events
        </NavLink>

        <NavLink to="/routing" className="block p-2 rounded hover:bg-blue-100">
          React Routing
        </NavLink>
        <NavLink to="/form-validation" className="block p-2 rounded hover:bg-blue-100">
          Form Validation
        </NavLink>

      </nav>
    </aside>
  );
}
