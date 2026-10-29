
import { useState, type FormEvent } from "react";
import { X, UserPlus } from "lucide-react";
import { useCreateUserMutation } from "../features/users/usersApi";

interface CreateUserFormProps {
  onClose: () => void;
}

export default function CreateUserForm({
  onClose,
}: CreateUserFormProps) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [dob, setDob] = useState("");

  const [createUser, { isLoading, isError }] =
    useCreateUserMutation();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await createUser({
        name: name.trim(),
        location: location.trim(),
        dob,
      }).unwrap();

      onClose();
    } catch {
      // The error message is displayed using isError below.
    }
  }

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isLoading) {
          onClose();
        }
      }}
    >
      <section
        className="user-modal create-user-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-user-title"
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          disabled={isLoading}
          aria-label="Close create user form"
        >
          <X size={20} />
        </button>

        <div className="create-user-heading">
          <span className="brand-icon">
            <UserPlus size={21} />
          </span>

          <h2 id="create-user-title">Add a new user</h2>
          <p>Enter the person's details below.</p>
        </div>

        <form className="create-user-form" onSubmit={handleSubmit}>
          <label htmlFor="new-user-name">Full name</label>
          <input
            id="new-user-name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Alex Johnson"
            autoComplete="name"
            maxLength={100}
            required
          />

          <label htmlFor="new-user-location">Location</label>
          <input
            id="new-user-location"
            name="location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="e.g. Lagos, Nigeria"
            maxLength={150}
            required
          />

          <label htmlFor="new-user-dob">Date of birth</label>
          <input
            id="new-user-dob"
            name="dob"
            type="date"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            max={new Date().toISOString().slice(0, 10)}
            required
          />

          {isError && (
            <p className="form-error" role="alert">
              Couldn't create the user. Please check your connection and try
              again.
            </p>
          )}

          <button
            className="primary-button create-user-submit"
            type="submit"
            disabled={
              isLoading ||
              !name.trim() ||
              !location.trim() ||
              !dob
            }
          >
            {isLoading ? "Creating user..." : "Create user"}
          </button>
        </form>
      </section>
    </div>
  );
}
