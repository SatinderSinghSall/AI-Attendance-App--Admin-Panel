import supabase from "../config/supabaseClient.js";
import { success, error } from "../utils/response.js";

// ✅ Get students by subject
export const getStudentsBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;

    const { data, error: err } = await supabase
      .from("subject_students")
      .select(
        `
        subject_id,
        student_id,
        students (
          id,
          name
        )
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

// ✅ Get subjects by student
export const getSubjectsByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const { data, error: err } = await supabase
      .from("subject_students")
      .select(
        `
        subject_id,
        student_id,
        subjects (
          subject_id,
          name
        )
      `,
      )
      .eq("student_id", studentId);

    if (err) throw err;

    success(res, data);
  } catch (err) {
    console.error(err);
    error(res, err);
  }
};
