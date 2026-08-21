import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import CategoryPicker from '../../components/CategoryPicker/CategoryPicker';
import PhotoDropzone from '../../components/PhotoDropzone/PhotoDropzone';
import { createOpinion } from '../../lib/opinions';
import './WritePage.css';

export default function WritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    setSubmitting(true);
    setError(null);
    try {
      const post = await createOpinion({ title, content, category, photo });
      navigate(`/posts/${post.id}`);
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  return (
    <div className="write-page">
      <PageTitle>의견 쓰기</PageTitle>

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

        <label className="write-form__field">
          <span className="write-form__label type-meta">내용</span>
          <textarea
            className="field"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="자세히 남겨주시면 처리하는 데 도움이 돼요."
          />
        </label>

        <div className="write-form__field">
          <span className="write-form__label type-meta">분야</span>
          <CategoryPicker value={category} onChange={setCategory} />
        </div>

        <div className="write-form__field">
          <span className="write-form__label type-meta">사진</span>
          <PhotoDropzone file={photo} onChange={setPhoto} />
        </div>

        {error && <p className="write-form__error type-meta">저장하지 못했어요. ({error})</p>}

        <div className="write-form__actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
            취소
          </button>
          <button type="submit" className="btn-cta" disabled={submitting}>
            {submitting ? '등록 중…' : '등록하기'}
          </button>
        </div>
      </form>
    </div>
  );
}
