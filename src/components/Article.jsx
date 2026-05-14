import React from "react";

const Article = ({ title, date, preview }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-semibold text-blue-600 mb-2">
        {title}
      </h3>

      <small className="text-gray-500 block mb-4">
        {date}
      </small>

      <p className="text-gray-700">
        {preview}
      </p>
    </div>
  );
};

export default Article;