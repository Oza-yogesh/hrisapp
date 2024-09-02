import React, { FC, useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

interface Employee {
  _id: string;
  name?: string;
  employeeId?: string;
}

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const CustomSelect: FC<{
  options: Employee[];
  placeholder?: string;
  onSelect: (option: Employee) => void;
}> = ({ options, placeholder = "Select...", onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<Employee[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter(
        (option) =>
          option.name?.toLowerCase().includes(inputValue.toLowerCase()) || ""
      )
    );
  }, [inputValue, options]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setShowOptions(value.length > 0);
  };


  //Handle
  const handleOptionClick = (option: Employee) => {
    setInputValue(option.name || "");
    setShowOptions(false);
    onSelect(option);
    setInputValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && filteredOptions.length > 0) {
      handleOptionClick(filteredOptions[0]);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <StyledInputBase
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowOptions(inputValue.length > 0)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        inputProps={{
          "aria-label": "select input",
        }}
        ref={inputRef}
      />
      {showOptions && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            borderRadius: "5px",
            paddingTop: "10px",
            zIndex: 1,
            maxHeight: "400px",
            overflowY: "auto",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {filteredOptions.map((option, index) => (
            <div
              key={option._id}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: "8px",
                cursor: "pointer",
                backgroundColor:
                  index === 0
                    ? "blue"
                    : inputValue.toLowerCase() ===
                      (option.name || "").toLowerCase()
                    ? "red"
                    : "white",
                color: index === 0 ? "white" : "black",
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
