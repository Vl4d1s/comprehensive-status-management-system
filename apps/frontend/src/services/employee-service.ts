import axios from "axios";
import type { Employee } from "../types";

const API_URL = "http://localhost:5001/api/v1";

export const fetchEmployees = async (): Promise<Employee[]> => {
  const { data } = await axios.get<Employee[]>(`${API_URL}/employees`);
  return data;
};

export const updateEmployeeStatus = async (
  id: number,
  status: string
): Promise<Employee> => {
  const { data } = await axios.patch<Employee>(`${API_URL}/employees/${id}`, {
    status,
  });

  return data;
};

export const createEmployee = async (employee: {
  name: string;
  status: string;
}): Promise<Employee> => {
  const { data } = await axios.post<Employee>(`${API_URL}/employees`, employee);

  return data;
};

export const deleteEmployee = async (
  id: number
): Promise<{ message: string }> => {
  const { data } = await axios.delete<{ message: string }>(
    `${API_URL}/employees/${id}`
  );

  return data;
};
