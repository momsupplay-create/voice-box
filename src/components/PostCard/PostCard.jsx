import { Link } from 'react-router-dom';
import StatusBadge from '../Badge/StatusBadge';
import CategoryBadge from '../Badge/CategoryBadge';
import './PostCard.css';

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      {post.photo && (
        <img className="post-card__photo" src={post.photo} alt="" />
      )}
      <div className="post-card__body">
        <div className="post-card__badges">
          <StatusBadge status={post.status} />
          <CategoryBadge category={post.category} />
        </div>
        <h3 className="post-card__title">{post.title}</h3>
        <p className="post-card__excerpt">{post.excerpt}</p>
        <div className="post-card__meta type-meta-sm">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
