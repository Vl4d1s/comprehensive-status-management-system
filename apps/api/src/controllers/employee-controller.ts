import type { Request, Response } from "express";
import { EmployeeService } from "../services/employee-service";

const employeeService = new EmployeeService();

export async function getEmployees(_: Request, res: Response) {
  const { data, error } = await employeeService.getAll();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
}

export async function getEmployee(req: Request, res: Response) {
  const { id } = req.params;
  const { data, error } = await employeeService.getById(id);

  if (error) {
    return res.status(404).json({ error: error.message });
  }

  res.json(data);
}

export async function createEmployee(req: Request, res: Response) {
  const { data, error } = await employeeService.create(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data);
}

export async function updateEmployee(req: Request, res: Response) {
  const { id } = req.params;
  const { data, error } = await employeeService.update(id, req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
}

export async function updateEmployeeStatus(req: Request, res: Response) {
  const { id } = req.params;
  const { status } = req.body;
  const { data, error } = await employeeService.updateStatus(id, status);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
}

export async function deleteEmployee(req: Request, res: Response) {
  const { id } = req.params;
  const { data, error } = await employeeService.delete(id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(204).json(data);
}

export const employeeController = {
  getEmployee,
  getEmployees,
  createEmployee,
  updateEmployee,
  updateEmployeeStatus,
  deleteEmployee,
};
