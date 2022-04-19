import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import PostsList from "./components/posts-list/PostsList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
