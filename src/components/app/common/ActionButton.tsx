import { Button, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

interface ActionButtonsProps {
  onCancel: () => void;
  onSave: () => void;
  showButtons: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCancel,
  onSave,
  showButtons,
}) => {
  if (!showButtons) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "20px",
        gap: "10px",
      }}
    >
      <Button startIcon={<ClearIcon />} onClick={onCancel}>
        Cancel
      </Button>
      <Button
        type="submit"
        variant="contained"
        startIcon={<CheckIcon />}
        onClick={onSave}
        sx={{
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
      >
        Save
      </Button>
    </Box>
  );
};

export default ActionButtons;
