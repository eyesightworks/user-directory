# User Directory

A responsive, dark-mode user directory built with React, TypeScript, Redux Toolkit, RTK Query, and Vite. The application allows users to browse profiles, search by name, view detailed user information, and create new user records through an API.

## Live Demo

- **Live Website:** https://user-directory-three-lovat.vercel.app/
- **GitHub Repository:** https://github.com/eyesightworks/user-directory
- **Design Reference:** [Figma Design](https://www.figma.com/design/o0Qr0wIqyNmgoDm3A7Vy2k/Untitled?node-id=1-1465&t=6vvVoHc2ql7MU7IK-1)

## Features

- **User Directory:** Fetch and display users from the provided MockAPI endpoint.
- **User Cards:** Display each user's avatar, full name, and email address in a card-based grid.
- **Search:** Filter the loaded user list by name on the client side.
- **User Details:** Open a profile modal showing available user information, including avatar, name, email, phone number, and location.
- **Create Users:** Add new users by submitting their name, location, and date of birth.
- **Data Fetching and Caching:** Use Redux Toolkit Query to manage API requests, loading states, caching, and data updates.
- **Virtualization:** Use `react-window` to render visible user cards efficiently.
- **Loading and Error States:** Display loading feedback and error messages, with retry options where implemented.
- **Responsive Design:** Provide a dark-themed interface for desktop, tablet, and mobile screens.
- **Accessibility:** Include semantic elements, accessible labels, visible focus indicators, and keyboard dismissal of the profile modal.

## Tech Stack

- **React** — UI development
- **TypeScript** — Static typing
- **Redux Toolkit** — State management
- **RTK Query** — API fetching, caching, and mutations
- **Vite** — Development server and build tooling
- **react-window** — List and grid virtualization
- **Lucide React** — Icons
- **CSS** — Styling and responsive layouts
- **MockAPI** — User data API
- **Vercel** — Hosting and deployment
- **Git and GitHub** — Version control and source code hosting

## API Documentation

The application uses the provided MockAPI service.

**Base URL**

`https://687124747ca4d06b34b97d3d.mockapi.io/api/`

### Available Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/userId` | Retrieve the user directory |
| GET | `/userId/:id` | Retrieve a specific user by ID |
| POST | `/userId` | Create a new user |

### Create User Request

The create-user request sends the following fields:

```json
{
  "name": "Test User",
  "location": "Lagos, Nigeria",
  "dob": "2000-01-15"
}
```

The example values are for testing only.

## Getting Started

### Prerequisites

Install the following tools before running the project:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/eyesightworks/user-directory.git
cd user-directory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL printed by Vite. It is typically:

`http://localhost:5173/`

### 4. Build for Production

```bash
npm run build
```

This command runs the TypeScript project build and generates the production assets in the `dist` directory.

### 5. Preview the Production Build

```bash
npm run preview
```

Open the local URL printed by Vite to inspect the production build.

## Project Structure

The project is organized into application state, reusable UI components, and user-related API functionality.

```text
user-directory/
├── src/
│   ├── app/
│   │   └── store.ts
│   ├── components/
│   │   ├── CreateUserForm.tsx
│   │   ├── ErrorState.tsx
│   │   ├── LoadingState.tsx
│   │   ├── SearchBar.tsx
│   │   ├── UserCard.tsx
│   │   ├── UserDetailsModal.tsx
│   │   └── VirtualizedUserGrid.tsx
│   ├── features/
│   │   └── users/
│   │       ├── userTypes.ts
│   │       └── usersApi.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Deployment

The application is deployed on Vercel.

**Live application:** https://user-directory-three-lovat.vercel.app/

To deploy your own copy:

1. Import the GitHub repository into [Vercel](https://vercel.com/).
2. Select **Vite** as the framework preset.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy the application.

When the GitHub repository is connected to Vercel, new commits pushed to the configured production branch can trigger automatic deployments.

## Assumptions and Implementation Notes

- The provided MockAPI endpoint is the source of user data.
- Search is performed on the client side against the users loaded by the application.
- Existing user records may not include every optional detail, such as phone number, location, or date of birth.
- New user records use the `name`, `location`, and `dob` fields specified in the challenge.
- The application uses the API's existing data structure and does not require a separate backend service.
- Authentication and user permissions are outside the scope of this assessment.
- The interface follows the supplied Figma design as the visual reference, with responsive layouts for different screen sizes.

## Author

**Eyesightworks**

- **GitHub:** https://github.com/eyesightworks
- **Portfolio:** https://eyesightworks.github.io/eyesight-skills/
