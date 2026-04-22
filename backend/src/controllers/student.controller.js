import supabase from "../config/supabaseClient.js";
import { success, error } from "../utils/response.js";

export const getAllStudents = async (req, res) => {
  try {
    const { data, error: err } = await supabase.from("students").select("*");

    if (err) throw err;

    success(res, data);
  } catch (err) {
    error(res, err);
  }
};

export const addStudent = async (req, res) => {
  try {
    const { name } = req.body;

    const { data, error: err } = await supabase
      .from("students")
      .insert([{ name }])
      .select();

    if (err) throw err;

    success(res, data[0]);
  } catch (err) {
    error(res, err);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const { data, error: err } = await supabase
      .from("students")
      .update({ name })
      .eq("student_id", id)
      .select();

    if (err) throw err;

    success(res, data[0]);
  } catch (err) {
    error(res, err);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const { error: err } = await supabase
      .from("students")
      .delete()
      .eq("student_id", id); // ✅ FIXED

    if (err) throw err;

    success(res, null, "Student deleted");
  } catch (err) {
    error(res, err);
  }
};
