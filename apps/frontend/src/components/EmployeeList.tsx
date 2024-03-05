import React from "react";
import { useQuery } from "@tanstack/react-query";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { fetchEmployees } from "../services/employee-service";
import EmployeeCard from "./EmployeeCard";
import Loader from "./common/Loader";
import ErrorMessage from "./common/ErrorMessage";

function EmployeeList() {
  const {
    data: employees,
    error,
    isFetching,
  } = useQuery({ queryKey: ["employees"], queryFn: fetchEmployees });

  if (isFetching && !employees) {
    return <Loader />;
  }

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {employees?.map((employee) => (
          <Grid item key={employee.id} md={4} sm={6} xs={12}>
            <EmployeeCard employee={employee} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default EmployeeList;
