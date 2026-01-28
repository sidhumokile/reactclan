import React from "react";

export default function Props() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h2 className="text-3xl font-bold text-gray-800">
        React – Props
      </h2>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What are Props?
        </h3>
        <p className="text-gray-600">
          Props (short for <strong>properties</strong>) are used to
          <strong> pass data from one component to another</strong>.
        </p>
        <p className="text-gray-600">
          Props make components dynamic and reusable.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Key Rules of Props
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Props are read-only</li>
          <li>They flow from parent to child</li>
          <li>A child component cannot modify props</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why Use Props?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Reuse components with different data</li>
          <li>Improve flexibility of UI</li>
          <li>Maintain clean data flow</li>
        </ul>
      </section>

      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
        <p className="text-purple-800 font-medium">
          👉 Props allow data sharing between React components.
        </p>
      </div>

    </div>
  );
}
