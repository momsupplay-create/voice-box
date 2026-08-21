import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_NAME } from '../../constants/site';
import { useAuth } from '../../lib/AuthContext';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import './AuthGate.css';

const COPY = {
  login: {
    heading: '로그인',
    message: '구글 계정으로 로그인하고 의견을 남겨보세요.',
    switchText: '아직 계정이 없으신가요?',
    switchLabel: '회원가입',
    switchTo: '/signup',
  },
  signup: {
    heading: '회원가입',
    message: '구글 계정으로 간편하게 시작해요.',
    switchText: '이미 계정이 있으신가요?',
    switchLabel: '로그인',
    switchTo: '/login',
  },
};

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.87 2.7-6.62z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.96v2.33A9 9 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.03z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.97L3.95 7.3C4.66 5.17 6.65 3.58 9 3.58z"
      />
    </svg>
  );
}

export default function AuthGate({ mode }) {
  const { signInWithGoogle } = useAuth();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const copy = COPY[mode];

  const handleConfirm = async () => {
    setConfirmOpen(false);
    await signInWithGoogle();
  };

  return (
    <div className="auth-gate">
      <div className="auth-card">
        <p className="auth-card__service type-title-sm">{SERVICE_NAME}</p>
        <h1 className="auth-card__heading type-headline-md">{copy.heading}</h1>
        <p className="auth-card__message type-body-sm">{copy.message}</p>

        <button type="button" className="btn-google" onClick={() => setConfirmOpen(true)}>
          <GoogleIcon />
          구글로 계속하기
        </button>

        <p className="auth-card__switch type-meta-sm">
          {copy.switchText} <Link to={copy.switchTo}>{copy.switchLabel}</Link>
        </p>
      </div>

      <ConfirmDialog
        open={confirmOpen}
        message="구글 계정으로 계속합니다. 처음이면 회원가입이, 이미 회원이면 로그인이 진행됩니다. 계속할까요?"
        onConfirm={handleConfirm}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  );
}
