import React from "react";

export default function ReactRouting() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h2 className="text-3xl font-bold text-gray-800">
        React – Routing
      </h2>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is Routing?
        </h3>
        <p className="text-gray-600">
          Routing allows navigation between different
          <strong> pages without reloading</strong> the page.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          React Router
        </h3>
        <p className="text-gray-600">
          React uses <strong>react-router-dom</strong> for routing.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Key Components
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>BrowserRouter</li>
          <li>Routes</li>
          <li>Route</li>
          <li>Link</li>
        </ul>
      </section>

      <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 rounded">
        <p className="text-cyan-800 font-medium">
          👉 Routing makes React a single-page application.
        </p>
      </div>

    </div>
  );
}
