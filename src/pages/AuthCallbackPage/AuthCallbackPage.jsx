import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { useToast } from '../../lib/ToastContext';

const NEW_USER_WINDOW_MS = 10000;

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const handledRef = useRef(false);

  useEffect(() => {
    const finish = async (session) => {
      if (handledRef.current || !session?.user) return;
      handledRef.current = true;

      const { data: profile } = await supabase
        .from('profiles')
        .select('created_at')
        .eq('id', session.user.id)
        .maybeSingle();

      const isNew =
        profile && Date.now() - new Date(profile.created_at).getTime() < NEW_USER_WINDOW_MS;

      showToast(isNew ? '가입을 마쳤습니다. 환영해요!' : '로그인되었습니다.');
      navigate('/', { replace: true });
    };

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) finish(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) finish(session);
    });

    return () => listener.subscription.unsubscribe();
  }, [navigate, showToast]);

  return <p className="auth-callback type-body">로그인 처리 중이에요…</p>;
}
