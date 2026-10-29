
interface ErrorStateProps {
  onRetry: () => void;
}

export default function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="status-container error-state" role="alert">
      <h2>Couldn't load users</h2>
      <p>Please check your connection and try again.</p>
      <button className="primary-button" type="button" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}
