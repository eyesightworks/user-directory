
export default function LoadingState() {
  return (
    <div className="status-container" role="status" aria-live="polite">
      <div className="loading-spinner" aria-hidden="true" />
      <h2>Loading users</h2>
      <p>Please wait while we fetch the directory.</p>
    </div>
  );
}
