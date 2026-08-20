import { useMemo, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import StatusTabs, { ALL_STATUS } from '../../components/StatusTabs/StatusTabs';
import CategoryFilter, { ALL_CATEGORY } from '../../components/CategoryFilter/CategoryFilter';
import PostGrid from '../../components/PostGrid/PostGrid';
import { posts } from '../../data/posts';
import './HomePage.css';

export default function HomePage() {
  const [status, setStatus] = useState(ALL_STATUS);
  const [category, setCategory] = useState(ALL_CATEGORY);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesStatus = status === ALL_STATUS || post.status === status;
      const matchesCategory = category === ALL_CATEGORY || post.category === category;
      return matchesStatus && matchesCategory;
    });
  }, [status, category]);

  return (
    <>
      <Hero />
      <div className="home-filters">
        <StatusTabs value={status} onChange={setStatus} />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>
      <PostGrid posts={filteredPosts} />
    </>
  );
}
