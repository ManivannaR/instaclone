import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPostPage({ users, setUsers }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    likes: 0,
    PostImage: "",
    date: new Date().toDateString(),
  });

  const routeChange = () => {
    navigate("/postviewpage");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers(users.concat(formData));
    routeChange();
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            className="file-input"
            type="file"
            name="PostImage"
            required
            onChange={handleFileChange}
          />
          <input
            name="name"
            type="text"
            className="author-input"
            placeholder="Author"
            onChange={handleChange}
            required
          />
          <input
            name="location"
            type="text"
            className="location-input"
            placeholder="Location"
            onChange={handleChange}
            required
          />
          <input
            name="description"
            type="text"
            className="description-input"
            placeholder="Description"
            onChange={handleChange}
            required
          />
          <button className="post-button" type="submit">
            Post
          </button>
        </form>
      </div>
    </>
  );
}

export default AddPostPage;
