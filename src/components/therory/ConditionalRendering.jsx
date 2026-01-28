import React from "react";

export default function ConditionalRendering() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h2 className="text-3xl font-bold text-gray-800">
        React – Conditional Rendering
      </h2>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is Conditional Rendering?
        </h3>
        <p className="text-gray-600">
          Conditional rendering means <strong>showing or hiding UI</strong>
          based on a condition.
        </p>
        <p className="text-gray-600">
          It works similar to conditions in JavaScript like if-else.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Common Use Cases
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Show login or logout button</li>
          <li>Display loading spinner</li>
          <li>Show error messages</li>
          <li>Toggle UI elements</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Methods Used
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>if / else</li>
          <li>ternary operator</li>
          <li>logical && operator</li>
        </ul>
      </section>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-yellow-800 font-medium">
          👉 Conditional rendering controls what users see on the screen.
        </p>
      </div>

    </div>
  );
}
