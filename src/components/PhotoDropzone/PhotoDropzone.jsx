import { useEffect, useRef, useState } from 'react';
import './PhotoDropzone.css';

function PhotoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M21 15L15.5 10.5C15 10.1 14.3 10.1 13.9 10.5L6 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PhotoDropzone({ file, onChange }) {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return undefined;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleSelect = (e) => {
    const picked = e.target.files?.[0];
    if (picked) onChange(picked);
  };

  const handleRemove = () => {
    onChange(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  if (previewUrl) {
    return (
      <div className="photo-dropzone photo-dropzone--filled">
        <img src={previewUrl} alt="첨부한 사진 미리보기" className="photo-dropzone__thumb" />
        <button type="button" className="photo-dropzone__remove" onClick={handleRemove} aria-label="사진 삭제">
          ×
        </button>
      </div>
    );
  }

  return (
    <label className="photo-dropzone">
      <PhotoIcon />
      <span className="type-meta">사진 추가 (선택, 최대 1장)</span>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleSelect}
        hidden
      />
    </label>
  );
}
