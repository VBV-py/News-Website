import React from "react";

const Header = ({ category, setCategory }) => {
  const categories = ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="text-center py-2">
        <h1 className="text-3xl font-bold">Latest News @WorldEye</h1>
      </div>
      <nav className="flex justify-center space-between gap-2 px-4 py-2 border-spacing-y-4 rounded-lg">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-200 transition"
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
