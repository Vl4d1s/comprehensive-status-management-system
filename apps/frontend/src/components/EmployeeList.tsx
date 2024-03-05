import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../services/employee-service";

export function EmployeeList() {
  const {
    data: employees,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["employees"], queryFn: fetchEmployees });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred</div>;

  return <ul>{JSON.stringify(employees)}</ul>;
}
