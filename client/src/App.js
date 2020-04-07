import React, { useEffect } from "react";
import axios from "./utils/axios";
import "./App.css";

function App() {
  useEffect(() => {
    axios.get("/api/posts").then(({ data }) => console.log(data));
  }, []);
  return <main className="App">hello world</main>;
}

export default App;
