import './ConfirmDialog.css';

export default function ConfirmDialog({ open, message, confirmLabel = '계속', cancelLabel = '취소', onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className="confirm-dialog__backdrop" onClick={onCancel}>
      <div className="confirm-dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <p className="confirm-dialog__message type-body-sm">{message}</p>
        <div className="confirm-dialog__actions">
          <button type="button" className="btn-secondary" onClick={onCancel}>
            {cancelLabel}
          </button>
          <button type="button" className="btn-cta" onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
