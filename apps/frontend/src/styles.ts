import type { SxProps } from "@mui/system";

export const useEmployeeCardStyles = () => ({
  card: {
    display: "flex",
    alignItems: "center",
    borderRadius: 2,
    boxShadow: 1,
    position: "relative",
    "&:hover": {
      boxShadow: 6,
    },
    transition: "box-shadow 0.3s ease-in-out",
  } as SxProps,
  cardMedia: {
    width: 151,
    height: 151,
    borderRadius: "50%",
    margin: 2,
  } as SxProps,
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
  } as SxProps,
  iconButton: {
    position: "absolute",
    top: 10,
    right: 10,
  } as SxProps,
});
