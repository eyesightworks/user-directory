# User Directory

A responsive, dark-mode user directory application built with React, TypeScript, Redux Toolkit, RTK Query, and Vite. The application fetches users from the provided MockAPI, displays them in a virtualized card grid, supports client-side search, provides detailed user profiles, and allows users to create new records.

## Live Demo

- **Live Website:** [User Directory](https://user-directory-three-lovat.vercel.app/)
- **GitHub Repository:** [eyesightworks/user-directory](https://github.com/eyesightworks/user-directory)
- **Figma Design Reference:** [View the original design](https://www.figma.com/design/o0Qr0wIqyNmgoDm3A7Vy2k/Untitled?node-id=1-1465&t=6vvVoHc2ql7MU7IK-1)

## Features

- **User Directory:** Fetch and display users from the provided MockAPI endpoint.
- **User Cards:** Display each user's avatar, full name, and email address in a card-based grid.
- **Search:** Filter the loaded users by name or email on the client side.
- **User Details:** Open a modal displaying the selected user's profile picture, full name, email, phone number, location, and date of birth when available.
- **Create Users:** Submit new user records with a name, location, and date of birth.
- **API Data Management:** Use Redux Toolkit Query for API requests, caching, and mutations.
- **Virtualization:** Use `react-window` to render visible user cards efficiently.
- **Loading and Error States:** Display loading indicators and error messages, with retry options where implemented.
- **Responsive Design:** Adapt the dark-themed interface for desktop, tablet, and mobile screens.
- **Accessibility:** Use semantic HTML, accessible labels, visible focus indicators, and Escape-key dismissal for the user-details modal.

## Tech Stack

- **React** — User interface
- **TypeScript** — Static typing
- **Redux Toolkit** — State management
- **RTK Query** — API requests, caching, and mutations
- **Vite** — Development server and build tooling
- **react-window** — Grid virtualization
- **Lucide React** — Icons
- **CSS** — Styling and responsive layouts
- **MockAPI** — User data API
- **Vercel** — Hosting and deployment
- **Git and GitHub** — Version control and source code hosting

## API Documentation

The application uses the provided MockAPI service.

**Base URL:**  
https://687124747ca4d06b34b97d3d.mockapi.io/api/

### Available Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/userId` | Retrieve the user directory |
| GET | `/userId/:id` | Retrieve an individual user by ID |
| POST | `/userId` | Create a new user |

### Create User Request

The create-user request sends a JSON body containing the following fields:

```json
{
  "name": "Test User",
  "location": "Lagos, Nigeria",
  "dob": "2000-01-15"
}
```

The values above are examples for testing only.

## Getting Started

### Prerequisites

Install the following tools:

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

Open the local URL printed by Vite. The default address is usually:

http://localhost:5173/

### 4. Build for Production

```bash
npm run build
```

This command runs the TypeScript build and generates the production assets in the `dist` directory.

### 5. Preview the Production Build

```bash
npm run preview
```

Open the local URL printed by Vite to inspect the production build.

## Project Structure

The application is organized into reusable components, application state, and user-related API functionality.

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

The application is hosted on Vercel.

**Live application:** [https://user-directory-three-lovat.vercel.app/](https://user-directory-three-lovat.vercel.app/)

To deploy your own copy:

1. Import the GitHub repository into [Vercel](https://vercel.com/).
2. Select Vite as the framework preset, if it is not detected automatically.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy the application.

When the repository is connected to Vercel, pushes to the configured production branch can trigger automatic deployments.

## Assumptions and Implementation Notes

- The supplied MockAPI endpoint is the source of user data.
- Search is performed on the client side against the users loaded by the application and supports name and email matching.
- Some existing user records may not include optional details such as phone number, location, or date of birth.
- New user records are submitted using the `name`, `location`, and `dob` fields specified in the challenge.
- The application uses the existing API data structure and does not require a separate backend service.
- Authentication and user permissions are outside the scope of this assessment.
- The supplied Figma design is the visual reference for the interface. Responsive CSS is used to adapt the layout to different screen sizes.

## Author

**Eyesightworks**

- **GitHub:** [eyesightworks](https://github.com/eyesightworks)
- **Portfolio:** [Eyesightworks Portfolio](https://eyesightworks.github.io/eyesight-skills/)
