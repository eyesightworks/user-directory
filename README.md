
# User Directory

A responsive user directory built with React, TypeScript, Redux Toolkit, and Vite. Browse profiles, search by name, view detailed user information, and add new users through an API.

## Features

- **User directory:** Fetch and display users from the API.
- **Search:** Filter users by name on the client side.
- **User details:** Open a profile modal showing available email, phone, location, and date of birth information.
- **Create users:** Submit a new user's name, location, and date of birth.
- **Virtualized list:** Render visible user cards efficiently with `react-window`.
- **Loading and error states:** Show loading feedback and retry options when requests fail.
- **Responsive design:** Dark-mode interface designed for desktop and mobile screens.
- **Accessibility:** Semantic elements, accessible labels, keyboard dismissal of the profile modal, and visible focus indicators.

## Tech Stack

- React
- TypeScript
- Redux Toolkit and RTK Query
- Vite
- Lucide React
- react-window
- CSS

## API

The application uses the following MockAPI endpoints:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/userId` | Retrieve all users |
| GET | `/api/userId/:id` | Retrieve one user |
| POST | `/api/userId` | Create a user |

Base URL:

`https://687124747ca4d06b34b97d3d.mockapi.io/api/`

The create-user request sends `name`, `location`, and `dob`.

## Getting Started

### Requirements

- Node.js and npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/eyesightworks/user-directory.git
cd user-directory
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

### Production build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This project can be deployed to a static hosting provider such as Vercel.

1. Import the GitHub repository into Vercel.
2. Select Vite as the framework preset.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy the application.

## Repository

[GitHub — User Directory](https://github.com/eyesightworks/user-directory)
