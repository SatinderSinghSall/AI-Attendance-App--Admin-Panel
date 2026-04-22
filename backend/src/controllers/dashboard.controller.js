import supabase from "../config/supabaseClient.js";
import { success, error } from "../utils/response.js";

export const getDashboardStats = async (req, res) => {
  try {
    const students = await supabase
      .from("students")
      .select("*", { count: "exact", head: true });

    const subjects = await supabase
      .from("subjects")
      .select("*", { count: "exact", head: true });

    const attendance = await supabase
      .from("attendance_logs")
      .select("*", { count: "exact", head: true });

    const teachers = await supabase
      .from("teachers")
      .select("*", { count: "exact", head: true });

    success(res, {
      totalStudents: students.count,
      totalSubjects: subjects.count,
      totalAttendance: attendance.count,
      totalTeachers: teachers.count,
    });
  } catch (err) {
    error(res, err);
  }
};
