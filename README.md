# User Directory

A responsive user directory built with React, TypeScript, Redux Toolkit, and Vite. Browse user profiles, search by name, view detailed information, and create new users through an API.

## Live Demo

**Live Website:** https://user-directory-three-lovat.vercel.app/

**GitHub Repository:** https://github.com/eyesightworks/user-directory

## Features

- **User Directory:** Fetch and display users from the API.
- **Search:** Filter users by name on the client side.
- **User Details:** Open a profile modal showing available email, phone, location, and date-of-birth information.
- **Create Users:** Submit a new user's name, location, and date of birth.
- **Virtualized Grid:** Render user cards efficiently using `react-window`.
- **Loading and Error States:** Display loading feedback and error messages with retry options.
- **Responsive Design:** Dark-themed interface designed for desktop and mobile screens.
- **Accessibility:** Semantic elements, accessible labels, keyboard dismissal of the profile modal, and visible focus indicators.

## Tech Stack

- React
- TypeScript
- Redux Toolkit and RTK Query
- Vite
- Lucide React
- react-window
- CSS

## API Integration

The application uses the following MockAPI endpoints.

Base URL:

`https://687124747ca4d06b34b97d3d.mockapi.io/api/`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/userId` | Retrieve all users |
| GET | `/userId/:id` | Retrieve a specific user |
| POST | `/userId` | Create a new user |

The create-user request sends the following fields:

- `name`
- `location`
- `dob`

## Getting Started

### Requirements

- Node.js
- npm
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

Vite will provide a local URL, typically `http://localhost:5173/`.

### Production Build

Build the application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is deployed on Vercel.

To deploy your own copy:

1. Import the GitHub repository into Vercel.
2. Select Vite as the framework preset.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy the application.

## Author

**Eyesightworks**

- GitHub: https://github.com/eyesightworks
- Portfolio: https://eyesightworks.github.io/eyesight-skills/
## Assumptions

- The provided MockAPI endpoint is the source of user data.
- Search filters the users already loaded from the API.
- Some existing user records may not contain phone numbers, locations, or dates of birth.
- New users are created using the name, location, and date-of-birth fields specified in the challenge.
- Authentication and user permissions are outside the scope of this assessment.