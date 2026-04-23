import express from "express";
import {
  getAllAttendance,
  getAttendanceDetails,
  getAttendanceBySubject,
} from "../controllers/attendance.controller.js";

const router = express.Router();

router.get("/", getAllAttendance);
router.get("/details", getAttendanceDetails);
router.get("/:subjectId", getAttendanceBySubject);

export default router;
