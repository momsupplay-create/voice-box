import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';
import WritePage from './pages/WritePage/WritePage';
import PostDetailPage from './pages/PostDetailPage/PostDetailPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Route>
    </Routes>
  );
}
