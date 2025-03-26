import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-black text-center bg-white p-4 mt-10">
        <button
        onClick={scrollToTop}
        className="mt-2 text-blue-400 rounded hover:text-blue-300 underline"
      >
        Go to Top
      </button>
      <div className="foot bg-white p-4 mt-10 text-black">
        <p >Made By Vaibhav Singh</p>
      <p>© 2025 News Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
