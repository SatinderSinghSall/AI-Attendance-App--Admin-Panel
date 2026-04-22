import express from "express";
import {
  getTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacher.controller.js";

const router = express.Router();

// GET
router.get("/", getTeachers);

// ADD
router.post("/", addTeacher);

// EDIT
router.put("/:id", updateTeacher);

// DELETE
router.delete("/:id", deleteTeacher);

export default router;
