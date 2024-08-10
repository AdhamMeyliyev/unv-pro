import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Container,
  Paper,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

// Columns definition for DataGrid
const columns = (isAdmin, onEdit, onDelete) => [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Ismi", width: 150 },
  { field: "lastName", headerName: "Familiya", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Telefon", width: 150 },
  { field: "course", headerName: "Kurs", width: 150 },
  { field: "joiningDate", headerName: "Qo'shilish sanasi", width: 180 },
  {
    field: "actions",
    headerName: "Harakatlar",
    width: 150,
    renderCell: (params) =>
      isAdmin ? (
        <div>
          <IconButton color="primary" onClick={() => onEdit(params.row)}>
            <Edit />
          </IconButton>
          <IconButton color="secondary" onClick={() => onDelete(params.row.id)}>
            <Delete />
          </IconButton>
        </div>
      ) : null,
  },
];

// Initial data for the DataGrid
const initialRows = [
  {
    id: 1,
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    course: "Mathematics",
    joiningDate: "2020-03-15",
  },
  {
    id: 2,
    name: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
    course: "Science",
    joiningDate: "2019-07-20",
  },
  // Other teachers' data
];

const TeacherTable = ({ isAdmin }) => {
  const [rows, setRows] = useState(initialRows);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);

  const handleEdit = (teacher) => {
    setCurrentTeacher(teacher);
    setEditDialogOpen(true);
  };

  const handleEditSave = () => {
    // Save logic here
    setEditDialogOpen(false);
  };

  const handleEditClose = () => {
    setEditDialogOpen(false);
    setCurrentTeacher(null);
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
    console.log("Deleted teacher with ID:", id);
  };

  return (
    <Container>
      <Paper style={{ padding: 16 }}>
        <Typography variant="h6" gutterBottom>
          Teacher List
        </Typography>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns(isAdmin, handleEdit, handleDelete)}
            pageSize={5}
            checkboxSelection={isAdmin}
          />
        </div>
      </Paper>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Teacher</DialogTitle>
        <DialogContent>
          {currentTeacher && (
            <div>
              <TextField
                margin="dense"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                defaultValue={currentTeacher.name}
              />
              <TextField
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                defaultValue={currentTeacher.email}
              />
              <TextField
                margin="dense"
                label="Phone"
                type="text"
                fullWidth
                variant="outlined"
                defaultValue={currentTeacher.phone}
              />
              <TextField
                margin="dense"
                label="Course"
                type="text"
                fullWidth
                variant="outlined"
                defaultValue={currentTeacher.course}
              />
              <TextField
                margin="dense"
                label="Joining Date"
                type="date"
                fullWidth
                variant="outlined"
                defaultValue={currentTeacher.joiningDate}
                InputLabelProps={{ shrink: true }}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TeacherTable;
