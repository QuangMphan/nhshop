import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/client/Layout";
import HomePage from "./components/pages/HomePage";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import PostEdit from "./components/admin/PostEdit";
import PostAdd from "./components/admin/PostAdd";
import BlogDetailPage from "./components/pages/BlogDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts/:id" element={<BlogDetailPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="post/add" element={<PostAdd />} />
          <Route path="post/edit/:id" element={<PostEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
