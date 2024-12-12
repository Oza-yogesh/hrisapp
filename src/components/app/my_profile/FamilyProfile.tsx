import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface FamilyMember {
  name: string;
  relationship: string;
  dob: string;
  dependant: boolean;
  editing: boolean;
}

const FamilyProfile: React.FC = () => {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [newMember, setNewMember] = useState<FamilyMember>({
    name: "",
    relationship: "",
    dob: "",
    dependant: false,
    editing: false,
  });

  const handleAddMember = () => {
    if (!newMember.name || !newMember.relationship || !newMember.dob) {
      alert("Please fill in all required fields before adding.");
      return;
    }
    setFamilyMembers([...familyMembers, { ...newMember, editing: false }]);
    setNewMember({ name: "", relationship: "", dob: "", dependant: false, editing: false });
  };

  const handleEditMember = (index: number) => {
    const updatedMembers = familyMembers.map((member, i) =>
      i === index ? { ...member, editing: !member.editing } : member
    );
    setFamilyMembers(updatedMembers);
  };

  const handleSaveEdit = (index: number, updatedMember: FamilyMember) => {
    const updatedMembers = familyMembers.map((member, i) =>
      i === index ? { ...updatedMember, editing: false } : member
    );
    setFamilyMembers(updatedMembers);
  };

  const handleDeleteMember = (index: number) => {
    const updatedMembers = [...familyMembers];
    updatedMembers.splice(index, 1);
    setFamilyMembers(updatedMembers);
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            textAlign: "initial",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Family Members
          </Typography>

          {/* Family Members Table */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "35%" }}>Name</TableCell>
                <TableCell style={{ width: "25%" }}>Relationship</TableCell>
                <TableCell style={{ width: "20%" }}>Date of Birth</TableCell>
                <TableCell style={{ width: "10%", textAlign: "center" }}>Dependant</TableCell>
                <TableCell style={{ width: "10%" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {familyMembers.map((member, index) => (
                <TableRow key={index}>
                  {member.editing ? (
                    <>
                      <TableCell>
                        <TextField
                          value={member.name}
                          onChange={(e) =>
                            handleSaveEdit(index, { ...member, name: e.target.value })
                          }
                          fullWidth
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Select
                          value={member.relationship}
                          onChange={(e) =>
                            handleSaveEdit(index, { ...member, relationship: e.target.value })
                          }
                          fullWidth
                          size="small"
                        >
                          <MenuItem value="Father">Father</MenuItem>
                          <MenuItem value="Mother">Mother</MenuItem>
                          <MenuItem value="Sibling">Sibling</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <TextField
                          type="date"
                          value={member.dob}
                          onChange={(e) =>
                            handleSaveEdit(index, { ...member, dob: e.target.value })
                          }
                          fullWidth
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          checked={member.dependant}
                          onChange={(e) =>
                            handleSaveEdit(index, { ...member, dependant: e.target.checked })
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleSaveEdit(index, { ...member, editing: false })}
                        >
                          Save
                        </Button>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.relationship}</TableCell>
                      <TableCell>{member.dob}</TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        <Checkbox checked={member.dependant} disabled />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => handleEditMember(index)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteMember(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Add New Member */}
          <Grid container spacing={2} alignItems="center" sx={{ marginTop: "20px" }}>
            <Grid item xs={3}>
              <TextField
                placeholder="Enter Name"
                value={newMember.name}
                fullWidth
                size="small"
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={3}>
              <Select
                value={newMember.relationship}
                fullWidth
                size="small"
                displayEmpty
                onChange={(e) => setNewMember({ ...newMember, relationship: e.target.value })}
              >
                <MenuItem value="" disabled>
                  Select Relationship
                </MenuItem>
                <MenuItem value="Father">Father</MenuItem>
                <MenuItem value="Mother">Mother</MenuItem>
                <MenuItem value="Sibling">Sibling</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="date"
                value={newMember.dob}
                fullWidth
                size="small"
                onChange={(e) => setNewMember({ ...newMember, dob: e.target.value })}
              />
            </Grid>
            <Grid item xs={2}>
              <Checkbox
                checked={newMember.dependant}
                onChange={(e) => setNewMember({ ...newMember, dependant: e.target.checked })}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleAddMember} color="primary">
                <AddCircleOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>

          {/* Footer Buttons */}
          <Grid
            container
            justifyContent="flex-end"
            spacing={2}
            sx={{ marginTop: "20px" }}
          >
            <Grid item>
              <Button variant="outlined" color="secondary">
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => console.log("Saved Members:", familyMembers)}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FamilyProfile;
