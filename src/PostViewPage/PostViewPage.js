import React from "react";
import PostHeader from "./PostHeader";
import Post from "./Post";

function Postviewpage({ users }) {
  return (
    <div className="main-div">
      <PostHeader></PostHeader>
      <div className="post-container">
        {users
          .slice(0)
          .reverse()
          .map((obj) => {
            return (
              <Post
                name={obj.name}
                location={obj.location}
                likes={obj.likes}
                description={obj.description}
                postImage={obj.PostImage}
                date={obj.date}
              ></Post>
            );
          })}
      </div>
    </div>
  );
}

export default Postviewpage;
