import supabase from "../config/supabaseClient.js";
import { success, error } from "../utils/response.js";

export const getAllAttendance = async (req, res) => {
  try {
    const { data, error: err } = await supabase.from("attendance_logs").select(`
      id,
      timestamp,
      subject_id,
      student_id,
      is_present,
      students(name),
      subjects(name)
    `);

    if (err) throw err;

    success(res, data);
  } catch (err) {
    console.error(err);
    error(res, err);
  }
};

export const getAttendanceBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;

    const { data, error: err } = await supabase
      .from("attendance_logs")
      .select(
        `
        id,
        timestamp,
        is_present,
        students(name),
        subjects(name)
      `,
      )
      .eq("subject_id", subjectId);

    if (err) throw err;

    success(res, data);
  } catch (err) {
    console.error(err);
    error(res, err);
  }
};
