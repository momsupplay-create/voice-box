import { CATEGORIES } from '../../data/posts';
import './CategoryFilter.css';

const ALL = '전체 분야';

export default function CategoryFilter({ value, onChange }) {
  const options = [ALL, ...CATEGORIES];

  return (
    <div className="category-filter">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`chip${value === option ? ' is-active' : ''}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export { ALL as ALL_CATEGORY };
