import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EmployeeList from "./components/EmployeeList";
import CreateEmployeeDialog from "./components/CreateEmployeeDialog";

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Button
        color="primary"
        endIcon={<AddIcon />}
        onClick={handleDialogOpen}
        sx={{ marginBottom: 4, marginTop: 4 }}
        variant="contained"
      >
        Create
      </Button>
      <EmployeeList />
      <CreateEmployeeDialog onClose={handleDialogClose} open={dialogOpen} />
    </Container>
  );
}

export default App;
