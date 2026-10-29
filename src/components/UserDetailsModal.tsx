
import { useEffect } from "react";
import { X, Mail, Phone, MapPin, CalendarDays } from "lucide-react";
import type { User } from "../features/users/userTypes";
import { useGetUserByIdQuery } from "../features/users/usersApi";

interface UserDetailsModalProps {
  user: User;
  onClose: () => void;
}

export default function UserDetailsModal({
  user,
  onClose,
}: UserDetailsModalProps) {
  const {
    data: details,
    isLoading,
    isError,
    refetch,
  } = useGetUserByIdQuery(user.id);

  const profile = details ?? user;
  const initials = profile.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="user-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="user-modal-title"
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close user details"
        >
          <X size={20} />
        </button>

        {isLoading && <p className="modal-status">Loading user details...</p>}

        {isError && (
          <div className="modal-status" role="alert">
            <p>Couldn't load the latest user details.</p>
            <button type="button" onClick={() => refetch()}>
              Try again
            </button>
          </div>
        )}

        <div className="modal-profile">
          {profile.avatar ? (
            <img
              className="modal-avatar"
              src={profile.avatar}
              alt={`${profile.name}'s profile`}
            />
          ) : (
            <div className="modal-avatar avatar-fallback" aria-hidden="true">
              {initials || "?"}
            </div>
          )}

          <h2 id="user-modal-title">{profile.name}</h2>
          <p className="modal-email">{profile.email}</p>
        </div>

        <div className="user-detail-list">
          <div className="user-detail-row">
            <Mail size={18} aria-hidden="true" />
            <div>
              <span>Email address</span>
              <p>{profile.email || "Not provided"}</p>
            </div>
          </div>

          <div className="user-detail-row">
            <Phone size={18} aria-hidden="true" />
            <div>
              <span>Phone number</span>
              <p>{profile.phone || "Not provided"}</p>
            </div>
          </div>

          <div className="user-detail-row">
            <MapPin size={18} aria-hidden="true" />
            <div>
              <span>Location</span>
              <p>{profile.location || "Not provided"}</p>
            </div>
          </div>

          <div className="user-detail-row">
            <CalendarDays size={18} aria-hidden="true" />
            <div>
              <span>Date of birth</span>
              <p>{profile.dob || "Not provided"}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
