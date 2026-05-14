import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <section>
      <h2>Articles</h2>
      {posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </section>
  );
}

export default ArticleList;