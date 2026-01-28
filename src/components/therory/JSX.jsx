import React from "react";

export default function JSX() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h2 className="text-3xl font-bold text-gray-800">
        React – JSX
      </h2>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is JSX?
        </h3>
        <p className="text-gray-600">
          JSX stands for <strong>JavaScript XML</strong>.
        </p>
        <p className="text-gray-600">
          It allows writing HTML-like code inside JavaScript.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why JSX?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Makes UI code readable</li>
          <li>Easy to write and understand</li>
          <li>Combines logic and UI</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          JSX Rules
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Only one parent element</li>
          <li>Use className instead of class</li>
          <li>JavaScript inside curly braces</li>
        </ul>
      </section>

      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
        <p className="text-indigo-800 font-medium">
          👉 JSX makes React code cleaner and expressive.
        </p>
      </div>

    </div>
  );
}
