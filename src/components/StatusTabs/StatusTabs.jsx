import { STATUSES } from '../../data/posts';
import './StatusTabs.css';

const ALL = '전체';

export default function StatusTabs({ value, onChange }) {
  const options = [ALL, ...STATUSES];

  return (
    <div className="status-tabs">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`chip status-tabs__btn${value === option ? ' is-active' : ''}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export { ALL as ALL_STATUS };
