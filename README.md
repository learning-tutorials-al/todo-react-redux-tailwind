![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
# Todo React App

A modern Todo application built with **React, TypeScript and Redux Toolkit**.  
The app allows users to create, edit, complete and filter tasks with persistent storage.

---

## 🔗 Live Demo
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-brightgreen?style=for-the-badge)](https://todo-react-redux-tailwind.vercel.app/)

## Features

- ➕ Add new todos
- ✏️ Edit existing todos
- ✅ Mark todos as completed
- 🗑 Delete todos
- 🔎 Filter tasks (All / Active / Completed)
- 📊 Task statistics
- 💾 LocalStorage persistence
- ⚡ Fast state management with Redux Toolkit
- 🎨 Responsive UI

---

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- Vite
- TailwindCSS
- Lucide Icons

---

## Project Structure

```
frontend
│
├── public
│
├── src
│   ├── assets
│   │
│   ├── components
│   │   ├── TodoApp.tsx
│   │   ├── TodoFilters.tsx
│   │   ├── TodoForm.tsx
│   │   └── TodoItem.tsx
│   │
│   ├── store
│   │   ├── selectors.ts
│   │   ├── store.ts
│   │   └── todoSlice.ts
│   │
│   ├── types
│   │   └── todo.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Installation

Clone the repository

```
git clone https://github.com/learning-tutorials-al/todo-react-redux-tailwind.git
```

Go to project folder

```
cd todo-react/frontend
```

Install dependencies

```
npm install
```

Run development server

```
npm run dev
```

---

## Data Persistence

Todos are stored in **localStorage**, so tasks remain available after refreshing the page.

---

## Preview

![Todo App Screenshot](./src/assets/Screenshot.png)
---

## Future Improvements

Possible improvements:

- Drag & Drop sorting
- Dark mode
- Backend API
- Authentication
- Cloud synchronization

---

