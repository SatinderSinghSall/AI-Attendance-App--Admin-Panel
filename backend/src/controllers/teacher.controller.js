import supabase from "../config/supabaseClient.js";
import { success, error } from "../utils/response.js";

export const getTeachers = async (req, res) => {
  try {
    const { data, error: err } = await supabase
      .from("teachers")
      .select("teacher_id, username, name");

    if (err) throw err;

    const safe = data.map((t) => ({
      ...t,
      password: "******",
    }));

    success(res, safe);
  } catch (err) {
    error(res, err);
  }
};

export const addTeacher = async (req, res) => {
  try {
    const { username, name, password } = req.body;

    const { data, error: err } = await supabase
      .from("teachers")
      .insert([{ username, name, password }])
      .select();

    if (err) throw err;

    success(res, data[0]);
  } catch (err) {
    error(res, err);
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, name, password } = req.body;

    const updateData = { username, name };

    if (password) {
      updateData.password = password;
    }

    const { data, error: err } = await supabase
      .from("teachers")
      .update(updateData)
      .eq("teacher_id", id)
      .select();

    if (err) throw err;

    success(res, data[0]);
  } catch (err) {
    error(res, err);
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    const { error: err } = await supabase
      .from("teachers")
      .delete()
      .eq("teacher_id", id);

    if (err) throw err;

    success(res, { message: "Deleted successfully" });
  } catch (err) {
    error(res, err);
  }
};
