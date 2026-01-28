import React from "react";

export default function Components() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h2 className="text-3xl font-bold text-gray-800">
        React – Components
      </h2>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is a Component?
        </h3>
        <p className="text-gray-600">
          A component is a <strong>reusable piece of UI</strong> in React.
          It can be a button, form, header, footer, or even a full page.
        </p>
        <p className="text-gray-600">
          Components help break the UI into small, manageable parts.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Types of Components
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Functional Components</strong> – Written using JavaScript
            functions (most common today)
          </li>
          <li>
            <strong>Class Components</strong> – Older method using ES6 classes
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why Components are Important?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Improve code reusability</li>
          <li>Easy to maintain and update</li>
          <li>Make UI structured and readable</li>
          <li>Encourage modular design</li>
        </ul>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <p className="text-blue-800 font-medium">
          👉 Components are the building blocks of React applications.
        </p>
      </div>

    </div>
  );
}
