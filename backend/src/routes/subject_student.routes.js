import express from "express";
import {
  getStudentsBySubject,
  getSubjectsByStudent,
} from "../controllers/subject_student.controller.js";

const router = express.Router();

router.get("/subject/:subjectId", getStudentsBySubject);
router.get("/student/:studentId", getSubjectsByStudent);

export default router;
