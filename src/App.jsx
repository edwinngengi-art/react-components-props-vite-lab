import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blog from "./data/blog";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header name={blog.name} />

      <About about={blog.about} />

      <ArticleList articles={blog.articles} />
    </div>
  );
};

export default App;