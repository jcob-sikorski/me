// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";

export default function App() {
  return (
    <BrowserRouter basename="/me">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<BlogList />} />
        <Route path="/writing/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}