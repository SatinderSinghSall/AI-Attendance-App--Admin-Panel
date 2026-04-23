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

export const getAttendanceDetails = async (req, res) => {
  try {
    const { timestamp } = req.query;

    if (!timestamp) {
      return res.status(400).json({ message: "Timestamp required" });
    }

    const start = new Date(timestamp);
    const end = new Date(start);
    end.setSeconds(end.getSeconds() + 1);

    const { data, error } = await supabase
      .from("attendance_logs")
      .select(`*, students(*), subjects(*)`)
      .gte("timestamp", start.toISOString())
      .lt("timestamp", end.toISOString());

    if (error) throw error;

    res.json({ data });
  } catch (err) {
    console.error("DETAILS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
