import { CATEGORIES } from '../../data/posts';
import './CategoryPicker.css';

export default function CategoryPicker({ value, onChange }) {
  return (
    <div className="category-picker" role="radiogroup" aria-label="분야 선택">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          role="radio"
          aria-checked={value === category}
          className={`chip${value === category ? ' is-active' : ''}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
