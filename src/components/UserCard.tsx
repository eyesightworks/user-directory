
import type { User } from "../features/users/userTypes";

interface UserCardProps {
  user: User;
  onClick: (user: User) => void;
}

export default function UserCard({ user, onClick }: UserCardProps) {
  const initials = user.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();

  return (
    <button
      type="button"
      className="user-card"
      onClick={() => onClick(user)}
      aria-label={`View details for ${user.name}`}
    >
      {user.avatar ? (
        <img
          className="user-avatar"
          src={user.avatar}
          alt=""
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <span className="user-avatar avatar-fallback" aria-hidden="true">
          {initials || "?"}
        </span>
      )}

      <span className="user-card-info">
        <span className="user-card-name">{user.name}</span>
        <span className="user-card-email">{user.email}</span>
      </span>
    </button>
  );
}
