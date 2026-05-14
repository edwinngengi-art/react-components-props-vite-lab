import React from "react";

const About = ({ about }) => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          About This Blog
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {about}
        </p>
      </div>
    </section>
  );
};

export default About;