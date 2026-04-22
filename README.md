# 🚀 AI Attendance Admin Panel

---

![Next.js](https://img.shields.io/badge/Frontend-Next.js-black)
![Express](https://img.shields.io/badge/Backend-Express.js-green)
![Supabase](https://img.shields.io/badge/Database-Supabase-purple)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Active-success)

---

A modern full-stack admin dashboard for managing AI-powered attendance systems.
Built with a clean architecture using **Next.js (Frontend)**, **Express.js (Backend)**, and **Supabase (Database)**.

---

## 📌 Features

### 👨‍🎓 Student Management

- Add, edit, delete students
- Search & pagination
- Clean UI with modal dialogs

### 👩‍🏫 Teacher Management

- Full CRUD operations
- Masked password display (`******`)
- Secure handling (no plain password exposure)

### 📚 Subject Management

- Manage subjects with:
  - Name
  - Subject Code
  - Section
  - Teacher Assignment

- Fully relational structure

### 📊 Attendance Tracking

- View attendance logs
- Filter by:
  - Student
  - Subject
  - Status (Present / Absent)

- Pagination + search

### 📈 Dashboard

- Real-time statistics:
  - Total Students
  - Teachers
  - Subjects
  - Attendance

- Activity feed
- Attendance trend chart

---

## 🧱 Tech Stack

### Frontend

- ⚛️ Next.js (App Router)
- 🎨 Tailwind CSS
- 🧩 shadcn/ui components
- 📊 Recharts (charts)

### Backend

- 🟢 Node.js + Express.js
- 🔐 Middleware-based architecture
- 📦 REST API structure

### Database

- 🟣 Supabase (PostgreSQL)
- Relational schema
- Secure queries

---

## 📂 Project Structure

```
AI Attendance Admin Panel
│
├── backend/          # Express API
│   ├── controllers/  # Business logic
│   ├── routes/       # API routes
│   ├── config/       # Supabase client
│   └── utils/        # Response helpers
│
├── frontend/         # Next.js app
│   ├── app/          # Pages (App Router)
│   ├── components/   # UI components
│   ├── lib/          # API layer
│   └── public/       # Static assets
```

# File Tree: AI Attendance Admin Panel

**Generated:** 4/23/2026, 4:42:14 AM
**Root Path:** `e:\My Projects\AI Attendance Admin Panel`

```
├── 📁 backend
│   ├── 📁 src
│   │   ├── 📁 config
│   │   │   └── 📄 supabaseClient.js
│   │   ├── 📁 controllers
│   │   │   ├── 📄 attendance.controller.js
│   │   │   ├── 📄 dashboard.controller.js
│   │   │   ├── 📄 student.controller.js
│   │   │   ├── 📄 subject.controller.js
│   │   │   ├── 📄 subject_student.controller.js
│   │   │   └── 📄 teacher.controller.js
│   │   ├── 📁 middleware
│   │   │   └── 📄 auth.middleware.js
│   │   ├── 📁 routes
│   │   │   ├── 📄 attendance.routes.js
│   │   │   ├── 📄 dashboard.routes.js
│   │   │   ├── 📄 student.routes.js
│   │   │   ├── 📄 subject.routes.js
│   │   │   ├── 📄 subject_student.routes.js
│   │   │   └── 📄 teacher.routes.js
│   │   ├── 📁 utils
│   │   │   └── 📄 response.js
│   │   └── 📄 app.js
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   └── 📄 server.js
├── 📁 frontend
│   ├── 📁 app
│   │   ├── 📁 attendance
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 dashboard
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 students
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 subject-students
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 subjects
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 teachers
│   │   │   └── 📄 page.tsx
│   │   ├── 📄 favicon.ico
│   │   ├── 🎨 globals.css
│   │   ├── 📄 layout.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 components
│   │   ├── 📁 ui
│   │   │   ├── 📄 alert-dialog.tsx
│   │   │   ├── 📄 badge.tsx
│   │   │   ├── 📄 button.tsx
│   │   │   ├── 📄 card.tsx
│   │   │   ├── 📄 dialog.tsx
│   │   │   ├── 📄 dropdown-menu.tsx
│   │   │   ├── 📄 input.tsx
│   │   │   ├── 📄 select.tsx
│   │   │   ├── 📄 skeleton.tsx
│   │   │   └── 📄 table.tsx
│   │   ├── 📄 data-table.tsx
│   │   ├── 📄 header.tsx
│   │   └── 📄 sidebar.tsx
│   ├── 📁 lib
│   │   ├── 📄 api.ts
│   │   └── 📄 utils.ts
│   ├── 📁 public
│   │   ├── 🖼️ file.svg
│   │   ├── 🖼️ globe.svg
│   │   ├── 🖼️ next.svg
│   │   ├── 🖼️ vercel.svg
│   │   └── 🖼️ window.svg
│   ├── ⚙️ .gitignore
│   ├── 📝 AGENTS.md
│   ├── 📝 CLAUDE.md
│   ├── 📝 README.md
│   ├── ⚙️ components.json
│   ├── 📄 eslint.config.mjs
│   ├── 📄 next-env.d.ts
│   ├── 📄 next.config.ts
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── 📄 postcss.config.mjs
│   └── ⚙️ tsconfig.json
└── 📝 README.md
```

---

_Generated by FileTree Pro Extension_

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-attendance-admin.git
cd ai-attendance-admin
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

#### Create `.env`

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=5000
```

#### Run backend

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔗 API Base URL

All frontend requests use:

```ts
const BASE_URL = "http://localhost:5000/api";
```

---

## 📡 API Endpoints

### Students

- `GET /api/students`
- `POST /api/students`
- `PUT /api/students/:id`
- `DELETE /api/students/:id`

### Teachers

- `GET /api/teachers`
- `POST /api/teachers`
- `PUT /api/teachers/:id`
- `DELETE /api/teachers/:id`

### Subjects

- `GET /api/subjects`
- `POST /api/subjects`
- `PUT /api/subjects/:id`
- `DELETE /api/subjects/:id`

### Attendance

- `GET /api/attendance`
- `GET /api/attendance/:subjectId`

### Dashboard

- `GET /api/dashboard`

---

## 🧠 Architecture Highlights

- ✅ Separation of concerns (controllers, routes, utils)
- ✅ Reusable API layer (`frontend/lib/api.ts`)
- ✅ Centralized `BASE_URL`
- ✅ Clean UI with reusable components
- ✅ No page reloads (state-driven updates)

---

## 🔐 Security Notes

- Passwords are **never exposed**
- UI displays masked values (`******`)
- Backend should hash passwords (recommended: bcrypt)

---

## 🚀 Future Improvements

- 🔐 Authentication (JWT / Supabase Auth)
- 📡 Real-time attendance updates
- 🤖 AI face recognition integration
- 📊 Advanced analytics dashboard
- 👥 Role-based access control
- 📁 Bulk import/export (CSV)

---

## 🧪 Development Tips

- Avoid `location.reload()` — use state updates
- Keep API logic inside `lib/api.ts`
- Use dialogs for all CRUD operations
- Maintain consistent UI patterns

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Submit a PR

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Built with ❤️ by Satinder Singh Sall
Full-Stack Web/Mobile Developer

---

## ⭐ Support

If you like this project:

- ⭐ Star the repo
- 🍴 Fork it
- 🛠 Contribute

---
