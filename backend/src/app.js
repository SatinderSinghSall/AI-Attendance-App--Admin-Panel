import express from "express";
import cors from "cors";

import studentRoutes from "./routes/student.routes.js";
import subjectRoutes from "./routes/subject.routes.js";
import attendanceRoutes from "./routes/attendance.routes.js";
import subjectStudentRoutes from "./routes/subject_student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/subject-students", subjectStudentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;
