# Personal Task Manager - Full Stack MERN Application

This is a full-stack Personal Task Manager built with MongoDB, Express, React, and Node (MERN). Users can register, login, and manage their tasks.

## Table of Contents
1. Project Overview
2. Tech Stack
3. Project Structure
4. Setup Instructions
5. Environment Variables
6. Features
7. Deployment
8. Screenshots
9. License

## Project Overview

This application allows users to:
- Register and login securely
- View all tasks in a dashboard
- Add, edit, and delete tasks
- View task details in a modal popup
- Filter tasks by status, priority, and category
- Fully responsive and professionally styled

## Tech Stack

**Frontend:**
- React
- Vite
- TailwindCSS
- Axios
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT authentication
- Bcryptjs


## Project Structure

mern-task-manager/
├── client/
│   ├── src/
│   ├── package.json
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── .gitignore
└── README.md


## Setup Instructions

### Backend
1. Go to `server` folder: `cd server`
2. Install dependencies: `npm install`
3. Create `.env` file:

MONGO_URI=<your_mongodb_atlas_uri>
JWT_SECRET=<your_jwt_secret>
PORT=5000

4. Run backend: `npm run dev` or `npm start`

### Frontend
1. Go to `client` folder: `cd client`
2. Install dependencies: `npm install`
3. Create `.env` file:

VITE_API_URL=http://localhost:5000/api

4. Run frontend: `npm run dev`


## Environment Variables

| Folder  | Variable      | Description                   |
|---------|---------------|-------------------------------|
| server  | MONGO_URI     | MongoDB Atlas connection URI  |
| server  | JWT_SECRET    | JWT authentication secret     |
| server  | PORT          | Backend port (default 5000)   |
| client  | VITE_API_URL  | Backend API URL for Axios     |

## Features

- JWT-based authentication
- Add/Edit/Delete tasks
- Responsive dashboard
- Task details modal
- Filtering tasks by status, priority, category
- Professional styling with TailwindCSS


## Deployment

**Backend**: Deployed on Render  
URL: https://your-backend.onrender.com  

**Frontend**: Can be deployed on Vercel/Netlify  
Set VITE_API_URL to your deployed backend URL
