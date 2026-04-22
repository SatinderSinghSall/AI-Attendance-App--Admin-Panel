import express from "express";
import {
  getAllAttendance,
  getAttendanceBySubject,
} from "../controllers/attendance.controller.js";

const router = express.Router();

router.get("/", getAllAttendance);
router.get("/:subjectId", getAttendanceBySubject);

export default router;
