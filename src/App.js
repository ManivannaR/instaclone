import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./LandingPage/LandingPage";
import Postviewpage from "./PostViewPage/PostViewPage";
import AddPostPage from "./AddPostPage/AddPostPage";
import { useState } from "react";
import existingData from "./Sample-Data/data";

function App() {
  const [users, setUsers] = useState(existingData);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route
            path="/postviewpage"
            element={<Postviewpage users={users} />}
          />
          <Route
            path="/addpost"
            element={<AddPostPage users={users} setUsers={setUsers} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
