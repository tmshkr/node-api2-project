import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import axios from "./utils/axios";
import "./App.scss";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/api/posts").then(({ data }) => setPosts(data));
  }, []);
  return (
    <main className="App">
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </main>
  );
}

export default App;
