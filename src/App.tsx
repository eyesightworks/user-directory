
import { useMemo, useState } from "react";
import { Users, UserRound, RefreshCw, UserPlus } from "lucide-react";
import { useGetUsersQuery } from "./features/users/usersApi";
import type { User } from "./features/users/userTypes";
import SearchBar from "./components/SearchBar";
import UserDetailsModal from "./components/UserDetailsModal";
import CreateUserForm from "./components/CreateUserForm";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import VirtualizedUserGrid from "./components/VirtualizedUserGrid";

export default function App() {
  const {
    data: users = [],
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useGetUsersQuery();

  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return users;

    return users.filter((user) =>
      (user.name ?? "").toLowerCase().includes(query)
    );
  }, [users, search]);

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="User Directory home">
          <span className="brand-icon">
            <Users size={21} />
          </span>
          <span>
            User<span className="brand-accent">Directory</span>
          </span>
        </a>

        <span className="topbar-label">
          <span className="status-dot" />
          Directory
        </span>
      </header>

      <section className="page-content">
        <div className="page-heading">
          <div>
            <p className="eyebrow">PEOPLE &amp; PROFILES</p>
            <h1>User Directory</h1>
            <p className="page-description">
              Browse and discover people in your directory.
            </p>
          </div>

          <div className="user-count">
            <UserRound size={17} />
            <span>{users.length} users</span>
          </div>
        </div>

        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} />

          <button
            className="refresh-button"
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
          >
            <RefreshCw
              size={16}
              className={isFetching ? "spinning" : ""}
            />
            Refresh
          </button>

          <button
            className="add-user-button"
            type="button"
            onClick={() => setShowCreateForm(true)}
          >
            <UserPlus size={17} />
            Add user
          </button>
        </div>

        {isLoading ? (
          <LoadingState />
        ) : isError && users.length === 0 ? (
          <ErrorState onRetry={() => refetch()} />
        ) : (
          <>
            <div className="results-heading">
              <h2>{search ? "Search results" : "All users"}</h2>
              <span>{filteredUsers.length} found</span>
            </div>

            {filteredUsers.length > 0 ? (
              <VirtualizedUserGrid
                users={filteredUsers}
                onUserClick={setSelectedUser}
              />
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <Users size={25} />
                </div>
                <h3>No users found</h3>
                <p>Try another name or clear your search.</p>

                {search && (
                  <button
                    className="primary-button"
                    type="button"
                    onClick={() => setSearch("")}
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}
          </>
        )}

        <footer className="page-footer">
          <span>User Directory</span>
          <span>Built with React, TypeScript &amp; Redux Toolkit</span>
        </footer>
      </section>

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}

      {showCreateForm && (
        <CreateUserForm onClose={() => setShowCreateForm(false)} />
      )}
    </main>
  );
}
