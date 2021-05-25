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
  const [showPosts, setShowPosts] = useState(true);

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

  useEffect(() => {
    getPosts();
  }, []);

  const handleShow = () => {
    setShowPosts(!showPosts);
    getPosts();
  };

  return <></>;
}

export default DataFetching;
