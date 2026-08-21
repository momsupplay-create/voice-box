import { useEffect, useMemo, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import StatusTabs, { ALL_STATUS } from '../../components/StatusTabs/StatusTabs';
import CategoryFilter, { ALL_CATEGORY } from '../../components/CategoryFilter/CategoryFilter';
import PostGrid from '../../components/PostGrid/PostGrid';
import { fetchOpinions } from '../../lib/opinions';
import './HomePage.css';

export default function HomePage() {
  const [status, setStatus] = useState(ALL_STATUS);
  const [category, setCategory] = useState(ALL_CATEGORY);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOpinions()
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesStatus = status === ALL_STATUS || post.status === status;
      const matchesCategory = category === ALL_CATEGORY || post.category === category;
      return matchesStatus && matchesCategory;
    });
  }, [posts, status, category]);

  return (
    <>
      <Hero />
      <div className="home-filters">
        <StatusTabs value={status} onChange={setStatus} />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>
      {loading && <p className="post-grid__empty">불러오는 중이에요…</p>}
      {error && <p className="post-grid__empty">의견을 불러오지 못했어요. ({error})</p>}
      {!loading && !error && <PostGrid posts={filteredPosts} />}
    </>
  );
}
