import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import CategoryPicker from '../../components/CategoryPicker/CategoryPicker';
import PhotoDropzone from '../../components/PhotoDropzone/PhotoDropzone';
import { createOpinion, fetchOpinionById, updateOpinion } from '../../lib/opinions';
import { generateAssist } from '../../lib/aiAssist';
import { useAuth } from '../../lib/AuthContext';
import './WritePage.css';

export default function WritePage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { user, profile, loading: authLoading } = useAuth();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [existingPhotoUrl, setExistingPhotoUrl] = useState(null);
  const [loadingPost, setLoadingPost] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) navigate('/login', { replace: true });
  }, [authLoading, user, navigate]);

  useEffect(() => {
    if (!isEdit) return;
    fetchOpinionById(id).then((post) => {
      if (!post) return;
      setTitle(post.title);
      setContent(post.content);
      setCategory(post.category);
      setExistingPhotoUrl(post.photo);
      setLoadingPost(false);
    });
  }, [id, isEdit]);

  const handleAiAssist = async () => {
    if (!content.trim() || aiLoading) return;

    setAiLoading(true);
    setAiError(null);
    try {
      const result = await generateAssist(content);
      setTitle(result.title);
      setContent(result.content);
      setCategory(result.category);
    } catch (err) {
      setAiError(err.message);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !user) return;

    setSubmitting(true);
    setError(null);
    try {
      if (isEdit) {
        const updated = await updateOpinion(id, { title, content, category, photo });
        navigate(`/posts/${updated.id}`);
      } else {
        const post = await createOpinion({
          title,
          content,
          category,
          photo,
          userId: user.id,
          author: profile?.display_name,
        });
        navigate(`/posts/${post.id}`);
      }
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  if (authLoading || !user || loadingPost) return null;

  return (
    <div className="write-page">
      <PageTitle>{isEdit ? '의견 수정' : '의견 쓰기'}</PageTitle>

      <form className="write-form" onSubmit={handleSubmit}>
        <label className="write-form__field">
          <span className="write-form__label type-meta">제목</span>
          <input
            className="field"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="어떤 불편이나 제안인가요?"
          />
        </label>

        <div className="write-form__field">
          <div className="write-form__field-header">
            <span className="write-form__label type-meta">내용</span>
            <button
              type="button"
              className="btn-secondary write-form__ai-btn"
              onClick={handleAiAssist}
              disabled={!content.trim() || aiLoading}
            >
              {aiLoading ? 'AI 작성 중…' : 'AI 작성도우미'}
            </button>
          </div>
          <textarea
            className="field"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="짧게 메모하듯 적어도 괜찮아요. AI 작성도우미가 정식 민원글로 다듬어드려요."
          />
          {aiError && <p className="write-form__error type-meta">{aiError}</p>}
        </div>

        <div className="write-form__field">
          <span className="write-form__label type-meta">분야</span>
          <CategoryPicker value={category} onChange={setCategory} />
        </div>

        <div className="write-form__field">
          <span className="write-form__label type-meta">사진</span>
          {existingPhotoUrl && !photo && (
            <div className="write-form__current-photo">
              <img src={existingPhotoUrl} alt="현재 등록된 사진" />
              <span className="type-meta-sm">현재 사진 · 새로 선택하면 교체돼요</span>
            </div>
          )}
          <PhotoDropzone file={photo} onChange={setPhoto} />
        </div>

        {error && <p className="write-form__error type-meta">저장하지 못했어요. ({error})</p>}

        <div className="write-form__actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
            취소
          </button>
          <button type="submit" className="btn-cta" disabled={submitting}>
            {submitting ? '등록 중…' : isEdit ? '수정하기' : '등록하기'}
          </button>
        </div>
      </form>
    </div>
  );
}
