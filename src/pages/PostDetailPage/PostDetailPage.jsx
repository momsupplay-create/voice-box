import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import StatusBadge from '../../components/Badge/StatusBadge';
import CategoryBadge from '../../components/Badge/CategoryBadge';
import { fetchOpinionById } from '../../lib/opinions';
import './PostDetailPage.css';

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchOpinionById(id)
      .then(setPost)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="post-detail post-detail--empty type-body">불러오는 중이에요…</p>;
  }

  if (!post) {
    return (
      <div className="post-detail post-detail--empty">
        <p className="type-body">글을 찾을 수 없어요.</p>
        <Link to="/" className="btn-secondary">
          홈으로
        </Link>
      </div>
    );
  }

  return (
    <div className="post-detail">
      <PageTitle>{post.title}</PageTitle>

      <div className="post-detail__badges">
        <StatusBadge status={post.status} />
        <CategoryBadge category={post.category} />
      </div>

      {post.photo && (
        <img className="post-detail__photo" src={post.photo} alt="" />
      )}

      <p className="post-detail__content type-body">{post.content}</p>

      <div className="post-detail__meta type-meta-sm">
        <span>{post.author}</span>
        <span>·</span>
        <span>{post.date}</span>
      </div>
    </div>
  );
}
