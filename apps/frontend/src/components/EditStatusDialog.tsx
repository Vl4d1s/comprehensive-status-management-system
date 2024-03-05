import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import type { Status } from "../types";

interface EditStatusDialogProps {
  open: boolean;
  currentStatus: Status;
  onSave: (newStatus: Status) => void;
  onClose: () => void;
}

export default function EditStatusDialog({
  open,
  currentStatus,
  onSave,
  onClose,
}: EditStatusDialogProps) {
  const [status, setStatus] = useState<Status>(currentStatus);

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as Status);
  };

  const handleSave = () => {
    onSave(status);
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Edit Employee Status</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <Select label="Status" onChange={handleStatusChange} value={status}>
            <MenuItem value="Working">Working</MenuItem>
            <MenuItem value="On Vacation">On Vacation</MenuItem>
            <MenuItem value="Lunch Time">Lunch Time</MenuItem>
            <MenuItem value="Business Trip">Business Trip</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
