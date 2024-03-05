import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import DialogActions from "@mui/material/DialogActions";
import { createEmployee } from "../services/employee-service";
import type { Status } from "../types";

export const statusOptions: Status[] = [
  "Working",
  "On Vacation",
  "Lunch Time",
  "Business Trip",
];

interface CreateEmployeeDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateEmployeeDialog({
  open,
  onClose,
}: CreateEmployeeDialogProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>(statusOptions[0]);

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createEmployee,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      }),
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleStatusChange = (e: SelectChangeEvent) => {
    setStatus(e.target.value as Status);
  };

  const handleSubmit = async () => {
    await mutateAsync({ name, status });
    onClose();
  };

  return (
    <Dialog
      aria-labelledby="create-employee-dialog-title"
      onClose={onClose}
      open={open}
    >
      <DialogTitle id="create-employee-dialog-title">
        Create New Employee
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          id="name"
          label="Employee Name"
          margin="dense"
          name="name"
          onChange={handleNameChange}
          type="text"
          value={name}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            id="status"
            label="Status"
            labelId="status-label"
            name="status"
            onChange={handleStatusChange}
            value={status}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" disabled={isPending} onClick={handleSubmit}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
