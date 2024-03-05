import { green, yellow, blue, red } from "@mui/material/colors";

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Working":
      return green[500];
    case "On Vacation":
      return yellow[700];
    case "Lunch Time":
      return blue[500];
    case "Business Trip":
      return red[500];
    default:
      return green[500];
  }
};
