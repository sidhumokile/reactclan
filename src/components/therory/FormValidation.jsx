import React from "react";

export default function FormValidation() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">
        React – Form Validation
      </h2>

      {/* Introduction */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          What is Form Validation?
        </h3>
        <p className="text-gray-600">
          Form validation is the process of <strong>checking user input</strong>
          before submitting a form.
        </p>
        <p className="text-gray-600">
          It ensures the data entered by the user is
          <strong> correct, complete, and meaningful</strong>.
        </p>
      </section>

      {/* Why Validation */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Why is Form Validation Important?
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Prevents incorrect or empty data submission</li>
          <li>Improves user experience</li>
          <li>Ensures data consistency</li>
          <li>Protects backend from invalid data</li>
        </ul>
      </section>

      {/* Types */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Types of Form Validation
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Client-side validation</strong> – Validation done in the browser
            using JavaScript or React
          </li>
          <li>
            <strong>Server-side validation</strong> – Validation done on the backend
          </li>
        </ul>

        <p className="text-gray-600">
          React mainly focuses on <strong>client-side validation</strong>.
        </p>
      </section>

      {/* React Approach */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          How Form Validation Works in React
        </h3>

        <p className="text-gray-600">
          In React, form validation is usually handled using:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>React <strong>state</strong> to store input values</li>
          <li>Event handlers like <strong>onChange</strong> and <strong>onSubmit</strong></li>
          <li>Conditional rendering to show error messages</li>
        </ul>
      </section>

      {/* Common Rules */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Common Validation Rules
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Required fields should not be empty</li>
          <li>Email must be in valid format</li>
          <li>Password length should meet requirements</li>
          <li>Confirm password should match password</li>
          <li>Phone number should contain valid digits</li>
        </ul>
      </section>

      {/* Error Handling */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Displaying Validation Errors
        </h3>

        <p className="text-gray-600">
          React uses <strong>conditional rendering</strong> to show error messages.
        </p>

        <p className="text-gray-600">
          Errors are usually shown:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Below the input field</li>
          <li>After form submission</li>
          <li>When the user leaves an input (onBlur)</li>
        </ul>
      </section>

      {/* Controlled Forms */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Controlled Components in Forms
        </h3>

        <p className="text-gray-600">
          In React, most forms use <strong>controlled components</strong>.
        </p>

        <p className="text-gray-600">
          This means form input values are controlled by React state,
          not directly by the DOM.
        </p>
      </section>

      {/* Libraries */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          Popular Form Validation Libraries
        </h3>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Formik</li>
          <li>React Hook Form</li>
          <li>Yup (schema-based validation)</li>
        </ul>

        <p className="text-gray-600">
          These libraries reduce boilerplate code and simplify validation logic.
        </p>
      </section>

      {/* Summary */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <p className="text-green-800 font-medium">
          👉 Form validation in React ensures correct user input, improves UX,
          and makes applications more reliable.
        </p>
      </div>

    </div>
  );
}
