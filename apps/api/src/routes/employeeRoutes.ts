import { Router } from "express";
import employeeController from "../controllers/employeeController";

export const employeeRouter: Router = Router();

employeeRouter.post("/", employeeController.createEmployee);
employeeRouter.get("/", employeeController.getEmployees);
employeeRouter.get("/:id", employeeController.getEmployee);
employeeRouter.put("/:id", employeeController.updateEmployee);
employeeRouter.patch("/:id/status", employeeController.updateEmployeeStatus);
employeeRouter.delete("/:id", employeeController.deleteEmployee);

export default employeeRouter;
