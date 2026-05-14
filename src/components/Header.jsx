import React from "react";

const Header = ({ name }) => {
  return (
    <header className="bg-blue-600 text-white py-6 shadow-md">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold">{name}</h1>
      </div>
    </header>
  );
};

export default Header;