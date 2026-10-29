
import { useState } from "react";
import type { User } from "../features/users/userTypes";

interface UserCardProps {
  user: User;
  onClick: (user: User) => void;
}

export default function UserCard({ user, onClick }: UserCardProps) {
  const [failedAvatar, setFailedAvatar] = useState<string | null>(null);

  const initials = user.name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();

  const hasAvatar = Boolean(
    user.avatar && failedAvatar !== user.avatar
  );

  return (
    <button
      type="button"
      className="user-card"
      onClick={() => onClick(user)}
      aria-label={`View details for ${user.name}`}
    >
      {hasAvatar ? (
        <img
          key={user.avatar}
          className="user-avatar"
          src={user.avatar}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => {
            setFailedAvatar(user.avatar ?? null);
          }}
        />
      ) : (
        <span
          className="user-avatar avatar-fallback"
          aria-hidden="true"
        >
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
