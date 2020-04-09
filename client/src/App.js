import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import axios from "./utils/axios";
import "./App.scss";

function App() {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    return axios.get("/api/posts").then(({ data }) => setPosts(data));
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path="/posts">
            <PostList posts={posts} getPosts={getPosts} />
          </Route>
          <Route exact path="/posts/new">
            <PostForm getPosts={getPosts} />
          </Route>
          <Route exact path="/posts/:id/edit">
            <PostForm getPosts={getPosts} />
          </Route>
          <Redirect to="/posts" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
