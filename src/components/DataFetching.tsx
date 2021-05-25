import { useState, useEffect } from "react";
import axios from "axios";
import "./DataFetching.css";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function DataFetching() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <></>;
}

export default DataFetching;
