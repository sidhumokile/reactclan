import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-6xl mx-auto px-6 py-4 text-center space-y-2">
        
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} React Learning Guide
        </p>

        <p className="text-gray-500 text-xs">
          Built for beginners • Learn React step by step
        </p>

      </div>
    </footer>
  );
}
