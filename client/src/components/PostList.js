import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

import Post from "./Post";

function PostList(props) {
  const { posts, getPosts } = props;
  const history = useHistory();
  return (
    <>
      <Button
        color="primary"
        className="create-new-post"
        onClick={() => history.push("/posts/new")}
      >
        Create New Post
      </Button>
      {posts.map((p) => (
        <Post key={p.id} post={p} getPosts={getPosts} />
      ))}
    </>
  );
}

export default PostList;
