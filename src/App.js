import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/pages/AboutUs";
import Contacts from "./components/pages/Contacts";
import { Page } from "./components/pages/Page";
import PostsList from "./components/posts-list/PostsList";

function App() {
  const [posts, setPosts] = useState([]);
  const [postsFiltered, setPostsFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch("http://wordpress.test/wp-json/wp/v2/posts");
    const posts = await response.json();
    setPosts(posts);
    setPostsFiltered(posts);
  };

  return (
    <div>
      <Navbar
        posts={posts}
        setPostsFiltered={setPostsFiltered}
        postsFiltered={postsFiltered}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Routes>
        <Route path="/" element={<PostsList postsFiltered={postsFiltered} />}>
          <Route
            path="/posts/:category"
            element={<PostsList postsFiltered={postsFiltered} />}
          />
        </Route>

        <Route path="/:slug" element={<Page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
