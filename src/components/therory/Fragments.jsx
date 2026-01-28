import React from "react";

export default function Fragments() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h2 className="text-3xl font-bold text-gray-800">
        React – Fragments
      </h2>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What are Fragments?
        </h3>
        <p className="text-gray-600">
          Fragments let you group multiple elements
          <strong> without adding extra DOM nodes</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why Use Fragments?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Avoid unnecessary divs</li>
          <li>Cleaner DOM structure</li>
          <li>Better performance</li>
        </ul>
      </section>

      <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded">
        <p className="text-teal-800 font-medium">
          👉 Fragments keep JSX clean without extra HTML.
        </p>
      </div>

    </div>
  );
}
