import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./components/not-found/NotFound";
import { Page } from "./components/pages/Page";
import PostsList from "./components/posts-list/PostsList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList />}>
          <Route path="/posts/category/:category" element={<PostsList />} />
        </Route>

        <Route path="page/:slug" element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
