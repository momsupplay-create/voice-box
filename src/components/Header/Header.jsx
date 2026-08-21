import { Link } from 'react-router-dom';
import { ORG_NAME } from '../../constants/site';
import { useAuth } from '../../lib/AuthContext';
import './Header.css';

function LogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="115" fill="#097A44" />
      <g transform="translate(26,19.1) scale(2.3)">
        <path
          d="M100,58 C72,28 22,48 32,98 C42,150 100,178 100,178 C100,178 158,150 168,98 C178,48 128,28 100,58 Z"
          fill="#FFFFFF"
        />
        <path d="M100,66 L100,164" stroke="#097A44" strokeWidth="3" strokeLinecap="round" />
        <path d="M100,92 L78,108" stroke="#097A44" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M100,92 L122,108" stroke="#097A44" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M100,124 L82,140" stroke="#097A44" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M100,124 L118,140" stroke="#097A44" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function Header() {
  const { user, profile, loading } = useAuth();

  return (
    <header className="app-header">
      <Link to="/" className="app-header__brand">
        <LogoIcon />
        <span className="app-header__org-name">{ORG_NAME}</span>
      </Link>

      {!loading && (
        <div className="app-header__actions">
          {user ? (
            <Link to="/mypage" className="app-header__avatar-link" aria-label="마이페이지">
              <img
                src={profile?.avatar_url || '/icons/icon-192.png'}
                alt=""
                className="app-header__avatar"
              />
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn-secondary app-header__auth-btn">
                로그인
              </Link>
              <Link to="/signup" className="btn-cta app-header__auth-btn">
                회원가입
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
