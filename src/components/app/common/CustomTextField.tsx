import React from "react";
import { SxProps, TextField } from "@mui/material";
import { Theme } from "@emotion/react";

interface CustomTextFieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "outlined" | "filled" | "standard";
  margin?: "none" | "dense" | "normal";
  width?: string | number;
  inputProps?: object;
  sx?: SxProps<Theme>;
  InputLabelProps?: object;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  variant = "standard",
  margin = "normal",
  width = "60vh",
  inputProps = {},
  InputLabelProps = {},
}) => {
  return (
    <TextField
      variant={variant}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      margin={margin}
      sx={{
        width, // Use customizable width from props
        "& .MuiInputLabel-root": {
          fontWeight: 600,
          color: "rgba(0, 0, 0, 0.8)", // Default label color
          fontSize: "18px",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#1976d2", // Label color when focused
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#1976d2", // Border color for outlined variant when focused
          },
        "& .MuiInputBase-root": {
          color: "#464a4c", // Input text color
          fontSize: "1rem",
        },
        "& .MuiInputBase-input": {
          whiteSpace: "pre-wrap", // Ensures word wrapping for textarea
          overflowWrap: "break-word", // Breaks long words to fit inside the box
        },
      }}
      InputLabelProps={{
        ...InputLabelProps,
      }}
      inputProps={{
        ...inputProps,
      }}
    />
  );
};

export default CustomTextField;
