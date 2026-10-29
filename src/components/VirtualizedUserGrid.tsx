
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FixedSizeGrid,
  type GridChildComponentProps,
} from "react-window";
import type { User } from "../features/users/userTypes";
import UserCard from "./UserCard";

interface VirtualizedUserGridProps {
  users: User[];
  onUserClick: (user: User) => void;
}

interface GridData {
  users: User[];
  columns: number;
  onUserClick: (user: User) => void;
}

const ROW_HEIGHT = 120;
const GRID_MAX_HEIGHT = 620;

function UserGridCell({
  columnIndex,
  rowIndex,
  style,
  data,
}: GridChildComponentProps<GridData>) {
  const index = rowIndex * data.columns + columnIndex;
  const user = data.users[index];

  if (!user) return null;

  return (
    <div
      style={{
        ...style,
        boxSizing: "border-box",
        padding: "0 8px 14px",
      }}
    >
      <UserCard user={user} onClick={data.onUserClick} />
    </div>
  );
}

export default function VirtualizedUserGrid({
  users,
  onUserClick,
}: VirtualizedUserGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setWidth(Math.floor(entry.contentRect.width));
      }
    });

    observer.observe(container);
    setWidth(Math.floor(container.getBoundingClientRect().width));

    return () => observer.disconnect();
  }, []);

  const columns = width < 600 ? 1 : width < 900 ? 2 : 3;
  const rowCount = Math.ceil(users.length / columns);

  const gridHeight = Math.min(
    GRID_MAX_HEIGHT,
    rowCount * ROW_HEIGHT
  );

  const itemData = useMemo<GridData>(
    () => ({
      users,
      columns,
      onUserClick,
    }),
    [users, columns, onUserClick]
  );

  if (users.length === 0 || width === 0) {
    return <div ref={containerRef} className="virtual-grid-container" />;
  }

  return (
    <div ref={containerRef} className="virtual-grid-container">
      <FixedSizeGrid<GridData>
        key={columns}
        columnCount={columns}
        columnWidth={width / columns}
        height={gridHeight}
        rowCount={rowCount}
        rowHeight={ROW_HEIGHT}
        width={width}
        itemData={itemData}
        overscanRowCount={2}
      >
        {UserGridCell}
      </FixedSizeGrid>
    </div>
  );
}
