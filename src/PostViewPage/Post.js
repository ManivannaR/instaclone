import React from "react";

function Post({ name, location, likes, description, postImage, date }) {
  return (
    <div className="post">
      <img className="more-icon" src="/images/icon-more.png" alt="more-icon" />
      <h4 className="post-name">{name}</h4>
      <h5 className="post-location">{location}</h5>
      <img className="post-image" src={postImage} alt="post" />
      <img
        className="heart-icon"
        src="/images/icon-heart.png"
        alt="heart-icon"
      />
      <img className="send-icon" src="/images/icon-send.png" alt="send-icon" />
      <h6 className="post-date">{date}</h6>
      <h6 className="post-likes">{likes} likes</h6>
      <p className="post-description">{description}</p>
    </div>
  );
}

export default Post;
