import React from "react";

export default function Events() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h2 className="text-3xl font-bold text-gray-800">
        React – Events
      </h2>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What are Events?
        </h3>
        <p className="text-gray-600">
          Events handle <strong>user interactions</strong>
          like clicks, typing, and hovering.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Common React Events
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>onClick</li>
          <li>onChange</li>
          <li>onSubmit</li>
          <li>onMouseEnter</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Event Handling Rules
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Use camelCase</li>
          <li>Pass function reference</li>
          <li>Use synthetic events</li>
        </ul>
      </section>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
        <p className="text-orange-800 font-medium">
          👉 Events make React applications interactive.
        </p>
      </div>

    </div>
  );
}
