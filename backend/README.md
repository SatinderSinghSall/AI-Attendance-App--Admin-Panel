# 🟢 AI Attendance Admin Panel — Backend

REST API for the AI Attendance Admin Panel built with **Node.js**, **Express.js**, and **Supabase**.

Provides endpoints for managing students, teachers, subjects, and attendance logs.

---

## 🚀 Overview

This backend handles:

- 👨‍🎓 Student management (CRUD)
- 👩‍🏫 Teacher management (CRUD)
- 📚 Subject management (CRUD)
- 📊 Attendance tracking
- 📈 Dashboard statistics

Built with a modular and scalable architecture.

---

## 🧱 Tech Stack

- 🟢 Node.js
- 🚏 Express.js
- 🟣 Supabase (PostgreSQL)
- 📦 REST API
- 🔐 Middleware support

---

## 📂 Folder Structure

```id="g1v8w2"
backend/
│
├── src/
│   ├── config/          # Supabase client
│   ├── controllers/     # Business logic
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   ├── utils/           # Response helpers
│   └── app.js           # Express app setup
│
├── server.js            # Entry point
└── package.json
```

---

## ⚙️ Setup

### 1️⃣ Install dependencies

```bash id="q7f2xz"
npm install
```

---

### 2️⃣ Create `.env`

```env id="k3z8pt"
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=5000
```

---

### 3️⃣ Run server

```bash id="w6c4vm"
npm run dev
```

Server runs at:

```id="v5z1ka"
http://localhost:5000
```

---

## 🔗 API Base URL

```id="d0n3kp"
/api
```

Example:

```id="t9h2mz"
http://localhost:5000/api/students
```

---

## 📡 API Endpoints

### 👨‍🎓 Students

```http id="f4s9jd"
GET    /api/students
POST   /api/students
PUT    /api/students/:id
DELETE /api/students/:id
```

---

### 👩‍🏫 Teachers

```http id="l2x8df"
GET    /api/teachers
POST   /api/teachers
PUT    /api/teachers/:id
DELETE /api/teachers/:id
```

---

### 📚 Subjects

```http id="p7r3kc"
GET    /api/subjects
POST   /api/subjects
PUT    /api/subjects/:id
DELETE /api/subjects/:id
```

---

### 📊 Attendance

```http id="n5w1bz"
GET /api/attendance
GET /api/attendance/:subjectId
```

---

### 📈 Dashboard

```http id="r3x9jm"
GET /api/dashboard
```

---

## 🧠 Architecture

- **Controllers** → Business logic
- **Routes** → Endpoint definitions
- **Config** → Database connection
- **Middleware** → Request handling
- **Utils** → Standard response format

---

## 📦 Response Format

All responses follow a consistent structure:

```json id="k9x3vr"
{
  "success": true,
  "data": {},
  "message": "optional message"
}
```

---

## 🔐 Security Notes

- Passwords should be hashed (recommended: bcrypt)
- Never expose sensitive data in API responses
- Use middleware for authentication (future scope)

---

## 🧪 Development Tips

- Keep controllers thin and focused
- Handle errors centrally
- Validate inputs before DB calls
- Use `.select()` wisely for performance

---

## 📡 Supabase Usage

Example:

```js id="z6k2rt"
const { data, error } = await supabase.from("students").select("*");
```

---

## 🚀 Future Improvements

- 🔐 JWT Authentication
- 👥 Role-based access (Admin / Teacher)
- 📡 Real-time attendance (Supabase Realtime)
- 🧾 Input validation (Zod / Joi)
- 📊 Advanced analytics
- 📁 File uploads (images for AI)

---

## 🧰 Scripts

```bash id="y2d7pa"
npm run dev    # Start dev server
npm start      # Start production server
```

---

## 📡 API Documentation

Swagger support can be added:

```id="q8l4nt"
http://localhost:5000/api-docs
```

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Submit pull request

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Built with ❤️ by Satinder Singh Sall using modern backend practices

---
