import { Typography } from "@mui/material";
import { FC } from "react";

const ErrorFallback: FC = () => {
  return (
    <>
      <Typography variant="h5">Oops! Something went wrong.</Typography>
      <Typography variant="body1">Please try again later.</Typography>
    </>
  );
};

export default ErrorFallback;
