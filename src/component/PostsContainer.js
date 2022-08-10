import React from "react";
import PostsList from "./PostsList";

const PostsContainer = () => {
  return (
    <div className="container">
      <h1 className="text-center">Posts-Fetcher</h1>
      <PostsList />
    </div>
  );
};

export default PostsContainer;
