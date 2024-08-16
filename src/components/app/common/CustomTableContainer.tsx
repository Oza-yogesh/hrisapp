import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FC } from "react";

type Props = {
  headers: string[];
  data: any[];
  noDataMessage: string;
  headerCellStyle?: React.CSSProperties;
};

const CustomTableContainer: FC<Props> = ({
  headers,
  data,
  noDataMessage,
  headerCellStyle,
}) => {
  return (
    <TableContainer sx={{ overflowX: "auto" }}>
      <Table sx={{ borderTop: "1px solid lightgray" }}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header}
                style={{ ...headerCellStyle, textAlign: "center" }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={headers.length}>
                <Typography variant="body1" textAlign="center">
                  {noDataMessage}
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow key={index}>
                {headers.map((header) => (
                  <TableCell key={header} style={{ textAlign: "center" }}>
                    {header === "Action" ? (
                      <>
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </>
                    ) : (
                      row[header]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTableContainer;
