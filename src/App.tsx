
import { useMemo, useState } from "react";
import {
  Users,
  UserRound,
  RefreshCw,
  UserPlus,
  LayoutDashboard,
  Ticket,
  BarChart3,
  Sparkles,
  ChevronDown,
} from "lucide-react";

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

    return users.filter((user) => {
      const name = (user.name ?? "").toLowerCase();
      const email = (user.email ?? "").toLowerCase();

      return name.includes(query) || email.includes(query);
    });
  }, [users, search]);

  function preventPlaceholderNavigation(
    event: React.MouseEvent<HTMLAnchorElement>
  ) {
    event.preventDefault();
  }

  return (
    <div className="dashboard-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <a
          className="brand sidebar-brand"
          href="#user-directory"
          aria-label="User Directory home"
        >
          <span className="brand-icon">
            <Users size={21} aria-hidden="true" />
          </span>

          <span>
            User<span className="brand-accent">Directory</span>
          </span>
        </a>

        <p className="sidebar-section-label">WORKSPACE</p>

        <nav className="sidebar-nav" aria-label="Workspace navigation">
          <a
            className="sidebar-nav-item"
            href="#dashboard"
            aria-disabled="true"
            onClick={preventPlaceholderNavigation}
          >
            <LayoutDashboard size={18} aria-hidden="true" />
            <span>Dashboard</span>
          </a>

          <a
            className="sidebar-nav-item active"
            href="#user-directory"
            aria-current="page"
          >
            <Users size={18} aria-hidden="true" />
            <span>User Directory</span>
          </a>

          <a
            className="sidebar-nav-item"
            href="#vouchers"
            aria-disabled="true"
            onClick={preventPlaceholderNavigation}
          >
            <Ticket size={18} aria-hidden="true" />
            <span>Vouchers</span>
            <ChevronDown
              className="sidebar-chevron"
              size={15}
              aria-hidden="true"
            />
          </a>

          <a
            className="sidebar-nav-item"
            href="#analytics"
            aria-disabled="true"
            onClick={preventPlaceholderNavigation}
          >
            <BarChart3 size={18} aria-hidden="true" />
            <span>Analytics</span>
          </a>

          <a
            className="sidebar-nav-item"
            href="#spotlight"
            aria-disabled="true"
            onClick={preventPlaceholderNavigation}
          >
            <Sparkles size={18} aria-hidden="true" />
            <span>Spotlight</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <span className="sidebar-bottom-dot" />
          <span>Workspace</span>
        </div>
      </aside>

      <div className="dashboard-main">
        <header className="topbar">
          <div className="topbar-breadcrumb">
            <span>Workspace</span>
            <span aria-hidden="true">/</span>
            <strong>User Directory</strong>
          </div>

          <span className="topbar-label">
            <span className="status-dot" />
            Directory
          </span>
        </header>

        <main className="page-content" id="user-directory">
          <section className="page-heading">
            <div>
              <p className="eyebrow">PEOPLE &amp; PROFILES</p>
              <h1>User Directory</h1>
              <p className="page-description">
                Browse and discover people in your directory.
              </p>
            </div>

            <div className="user-count">
              <UserRound size={17} aria-hidden="true" />
              <span>{users.length} users</span>
            </div>
          </section>

          <section
            className="toolbar"
            aria-label="User directory controls"
          >
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
                aria-hidden="true"
              />
              {isFetching ? "Refreshing..." : "Refresh"}
            </button>

            <button
              className="add-user-button"
              type="button"
              onClick={() => setShowCreateForm(true)}
            >
              <UserPlus size={17} aria-hidden="true" />
              Add New
            </button>
          </section>

          {isLoading ? (
            <LoadingState />
          ) : isError && users.length === 0 ? (
            <ErrorState onRetry={() => refetch()} />
          ) : (
            <section aria-label="Directory results">
              <div className="results-heading">
                <h2>{search.trim() ? "Search results" : "Users"}</h2>
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
                    <Users size={25} aria-hidden="true" />
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
            </section>
          )}

          <footer className="page-footer">
            <span>User Directory</span>
            <span>React, TypeScript &amp; Redux Toolkit</span>
          </footer>
        </main>
      </div>

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}

      {showCreateForm && (
        <CreateUserForm
          onClose={() => setShowCreateForm(false)}
        />
      )}
    </div>
  );
}
