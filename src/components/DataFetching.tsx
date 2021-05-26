import { useState, useEffect } from "react";
import axios from "axios";
import "./DataFetching.css";
import image from "../images/source_icons_delete-circled-outline.svg";


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
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        //console.log(res);
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

  const handleRemove = (id: number) => {
    const removePost = posts.filter((post) => post.id !== id);

    setPosts(removePost);
  };

  return (
    <>
      <div className="buttonPosts">
        {!showPosts ? (
          <button className="styleButton" onClick={handleShow}>
            Show Posts!
          </button>
        ) : (
          <button className="styleButton" onClick={handleShow}>
            Hidden Posts!
          </button>
        )}
      </div>
      {showPosts && (
        <div className="cards_wrap">
          {posts.map((post) => (
            <div className="card_item" key={post.id}>
              <div className="card_inner">
                <div className="title_post">{post.title}</div>
                <div className="user_id">User {post.userId}</div>
                <div className="comment_post">{post.body}</div>
                <div className="image">
                  <img
                    src={image}
                    alt="trash"
                    onClick={() => handleRemove(post.id)}
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default DataFetching;
