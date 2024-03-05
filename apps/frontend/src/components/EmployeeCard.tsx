import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployeeStatus } from "../services/employee-service";
import type { Employee, Status } from "../types";
import { getStatusColor } from "../utils";
import { useEmployeeCardStyles } from "../styles";
import EditStatusDialog from "./EditStatusDialog";

interface EmployeeCardProps {
  employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const styles = useEmployeeCardStyles();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: updateEmployeeStatus,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      }),
  });

  const handleStatusEdit = async (newStatus: Status) => {
    await mutateAsync({ id: employee.id, status: newStatus });
    setIsEditDialogOpen(false);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Card
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        sx={styles.card}
      >
        {isHovering ? (
          <EditStatusButton
            onClick={() => {
              setIsEditDialogOpen(true);
            }}
          />
        ) : null}
        <CardMedia
          alt={employee.name}
          component="img"
          image={employee.image}
          sx={styles.cardMedia}
        />
        <CardContent sx={styles.content}>
          <Typography variant="h6">{employee.name}</Typography>
          <Typography
            color="text.secondary"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
            variant="body2"
          >
            <StatusCircle status={employee.status} />
            {employee.status}
          </Typography>
        </CardContent>
      </Card>
      <EditStatusDialog
        currentStatus={employee.status}
        onClose={() => {
          setIsEditDialogOpen(false);
        }}
        onSave={handleStatusEdit}
        open={isEditDialogOpen}
      />
    </>
  );
}

function StatusCircle({ status }: { status: string }) {
  return (
    <span
      style={{
        display: "block",
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: getStatusColor(status),
        marginRight: "8px",
      }}
    />
  );
}

function EditStatusButton({ onClick }: { onClick: () => void }) {
  return (
    <Box sx={{ position: "absolute", top: 10, right: 10 }}>
      <Tooltip title="Edit Status">
        <IconButton color="primary" onClick={onClick}>
          <EditIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
