import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    getData();
  }, [posts]);
  return (
    <div>
      {posts.map((post) => (
        <ul>
          <li key={post.id}>{post.title}</li>
          <p>Body {post.body}</p>
        </ul>
      ))}
    </div>
  );
};

export default FetchDataEffect;
