import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import StatusBadge from '../../components/Badge/StatusBadge';
import CategoryBadge from '../../components/Badge/CategoryBadge';
import { useAuth } from '../../lib/AuthContext';
import { deleteOpinion, fetchMyOpinions } from '../../lib/opinions';
import './MyPage.css';

const TABS = [
  { key: 'posts', label: '내가 쓴 글' },
  { key: 'info', label: '내 정보' },
];

export default function MyPage() {
  const { user, profile, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState('posts');
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) navigate('/login', { replace: true });
  }, [authLoading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    fetchMyOpinions(user.id)
      .then(setPosts)
      .finally(() => setLoadingPosts(false));
  }, [user]);

  const handleDelete = async (id) => {
    if (!window.confirm('이 글을 삭제할까요?')) return;
    await deleteOpinion(id);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (authLoading || !user) return null;

  return (
    <div className="mypage">
      <PageTitle>마이페이지</PageTitle>

      <div className="mypage__tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            className={`chip${tab === t.key ? ' is-active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'posts' && (
        <div className="mypage__posts">
          {loadingPosts && <p className="type-body-sm">불러오는 중이에요…</p>}
          {!loadingPosts && posts.length === 0 && (
            <p className="type-body-sm">아직 작성한 의견이 없어요.</p>
          )}
          {posts.map((post) => (
            <div key={post.id} className="mypage__post-card">
              {post.photo && <img src={post.photo} alt="" className="mypage__post-photo" />}
              <div className="mypage__post-body">
                <div className="mypage__post-badges">
                  <StatusBadge status={post.status} />
                  <CategoryBadge category={post.category} />
                </div>
                <Link to={`/posts/${post.id}`} className="mypage__post-title type-title-sm">
                  {post.title}
                </Link>
                <p className="mypage__post-meta type-meta-sm">{post.date}</p>
              </div>
              <div className="mypage__post-actions">
                <Link to={`/write/${post.id}`} className="btn-secondary mypage__post-btn">
                  수정
                </Link>
                <button
                  type="button"
                  className="btn-secondary mypage__post-btn"
                  onClick={() => handleDelete(post.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'info' && (
        <div className="mypage__info">
          {profile?.avatar_url && (
            <img src={profile.avatar_url} alt="" className="mypage__avatar" />
          )}
          <p className="type-title-sm">{profile?.display_name || '이름 없음'}</p>
          <p className="type-meta-sm">{user.email}</p>
          <button type="button" className="btn-secondary mypage__signout" onClick={handleSignOut}>
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}
