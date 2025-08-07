import React from "react";

const Footer = () => (
  <footer className="w-full bg-gray-900 text-red-500 py-4 mt-8 text-center border-t border-red-500">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Todo App &mdash; Built with React, Vite,
      Tailwind CSS, Node.js, Express, and MongoDB Atlas.
    </p>
  </footer>
);

export default Footer;
