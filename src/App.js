import React, { useState, useEffect } from "react";
import "./App.css";
import { db, auth } from "./FireBaseConfig";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      console.log("hahah", snapshot);
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  console.log("postivi su ", posts);
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          alt="logo"
          src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration.png"
        ></img>
      </div>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
