import React from "react";

export default function ReactState() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h2 className="text-3xl font-bold text-gray-800">
        React – State
      </h2>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is State?
        </h3>
        <p className="text-gray-600">
          State is an <strong>object that stores data</strong> that can
          change over time.
        </p>
        <p className="text-gray-600">
          When state changes, the component automatically re-renders.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Characteristics of State
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>State is local to a component</li>
          <li>State can change</li>
          <li>State updates trigger re-render</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          When to Use State?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>User input handling</li>
          <li>Toggle UI elements</li>
          <li>Dynamic data display</li>
        </ul>
      </section>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <p className="text-red-800 font-medium">
          👉 State makes React components interactive.
        </p>
      </div>

    </div>
  );
}
