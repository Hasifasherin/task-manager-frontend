# Personal Task Manager - Frontend

This repository contains the **frontend** for the **Personal Task Manager** application, built with **React**, **Vite**, and **TailwindCSS**. It connects to a backend API for authentication and task management.

---

## **Table of Contents**

1. [Project Overview](#project-overview)  
2. [Tech Stack](#tech-stack)  
3. [Project Structure](#project-structure)  
4. [Setup Instructions](#setup-instructions)  
5. [Environment Variables](#environment-variables)  
6. [Available Scripts](#available-scripts)  
7. [Features](#features)  
8. [Screenshots](#screenshots)  
9. [License](#license)  

---

## **Project Overview**

The frontend allows users to:

- **Register** and **login** securely  
- View all tasks in a **dashboard**  
- **Add, edit, and delete tasks**  
- View task details in a **modal**  
- Filter tasks by **status, priority, and category**  

It is **fully responsive** and **professionally styled** with **TailwindCSS**.

---

## **Tech Stack**

- **React 18** – Frontend library  
- **Vite** – Dev server and build tool  
- **TailwindCSS** – Styling framework  
- **Axios** – HTTP client for API calls  
- **React Router DOM** – Client-side routing  

---

## **Project Structure**

client/
│
├── public/
│ # Static assets
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Sidebar.jsx
│ │ ├── TaskCard.jsx
│ │ ├── TaskDetails.jsx
│ │ ├── TaskForm.jsx
│ │ ├── TaskItem.jsx
│ │ ├── TaskModal.jsx
│ │ └── Topbar.jsx
│ │
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ ├── Login.jsx
│ │ └── Register.jsx
│ │
│ ├── services/
│ │ └── api.js # Axios setup
│ │
│ ├── utils/
│ │ └── baseUrl.js # Backend URL
│ │
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css # TailwindCSS + global styles
│ └── App.css # Optional component styling
│
├── .gitignore
├── package.json
└── vite.config.js


---

## **Setup Instructions**

1. **Clone the repository**

```bash
git clone <your-frontend-repo-url>
cd client

2.  **Install dependencies**
npm install
