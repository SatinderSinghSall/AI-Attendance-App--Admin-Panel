import supabase from "../config/supabaseClient.js";
import { success, error } from "../utils/response.js";

export const getSubjects = async (req, res) => {
  try {
    const { data, error: err } = await supabase.from("subjects").select("*");

    if (err) throw err;

    success(res, data);
  } catch (err) {
    error(res, err);
  }
};

export const createSubject = async (req, res) => {
  try {
    const { name, subject_code, section, teacher_id } = req.body;

    const { data, error: err } = await supabase
      .from("subjects")
      .insert([{ name, subject_code, section, teacher_id }])
      .select();

    if (err) throw err;

    success(res, data[0], "Subject created");
  } catch (err) {
    error(res, err);
  }
};

export const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, subject_code, section, teacher_id } = req.body;

    const { data, error: err } = await supabase
      .from("subjects")
      .update({ name, subject_code, section, teacher_id })
      .eq("subject_id", id)
      .select();

    if (err) throw err;

    success(res, data[0]);
  } catch (err) {
    error(res, err);
  }
};

export const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const { error: err } = await supabase
      .from("subjects")
      .delete()
      .eq("subject_id", id);

    if (err) throw err;

    success(res, null, "Deleted");
  } catch (err) {
    error(res, err);
  }
};
