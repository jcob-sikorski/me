// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";

export default function App() {
  return (
    // We use HashRouter for easy compatibility with GitHub Pages
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<BlogList />} />
        <Route path="/writing/:slug" element={<BlogPost />} />
      </Routes>
    </HashRouter>
  );
}