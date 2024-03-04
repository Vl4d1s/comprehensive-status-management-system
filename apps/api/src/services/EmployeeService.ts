import supabase from "../config/superbase";
import { Tables } from "../types/database.types";

export class EmployeeService {
  async getAll() {
    const { data, error } = await supabase.from("employees").select("*");

    return { data, error };
  }

  async getById(id: string) {
    const { data, error } = await supabase
      .from("employees")
      .select("*")
      .eq("id", id)
      .single();
    return { data, error };
  }

  async create(employee: Tables<"employees">) {
    const { data, error } = await supabase.from("employees").insert([employee]);

    return { data, error };
  }

  async update(id: string, updates: any) {
    const { data, error } = await supabase
      .from("employees")
      .update(updates)
      .eq("id", id);

    return { data, error };
  }

  async updateStatus(id: string, status: string) {
    const { data, error } = await supabase
      .from("employees")
      .update({ status })
      .eq("id", id);

    return { data, error };
  }

  async delete(id: string) {
    const { data, error } = await supabase
      .from("employees")
      .delete()
      .eq("id", id);

    return { data, error };
  }
}
