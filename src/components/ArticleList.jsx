 import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Latest Articles
      </h2>

      <div className="grid gap-6">
        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            date={article.date}
            preview={article.preview}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;