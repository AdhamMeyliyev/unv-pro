import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Container,
  Paper,
  Typography,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

// Custom component for rendering the Attendance checkbox
const AttendanceCheckbox = ({ value, onChange }) => (
  <Checkbox
    checked={value === "Present"}
    onChange={(e) => onChange(e.target.checked ? "Present" : "Absent")}
    color="primary"
  />
);

const columns = (isAdmin, onEdit, onDelete, onAttendanceChange) => [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Ismi", width: 150 },
  { field: "lastName", headerName: "Familiya", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Telefon", width: 150 },
  { field: "course", headerName: "Kurs", width: 150 },
  {
    field: "registrationDate",
    headerName: "Roʻyxatdan oʻtgan sana",
    width: 180,
  },
  {
    field: "attendance",
    headerName: "Davomat",
    width: 150,
    renderCell: (params) => (
      <AttendanceCheckbox
        value={params.value}
        onChange={(newValue) => onAttendanceChange(params.id, newValue)}
      />
    ),
  },
  {
    field: "actions",
    headerName: "Harakatlar",
    width: 150,
    renderCell: (params) =>
      isAdmin ? (
        <div>
          <IconButton color="primary" onClick={() => onEdit(params.row.id)}>
            <Edit />
          </IconButton>
          <IconButton color="secondary" onClick={() => onDelete(params.row.id)}>
            <Delete />
          </IconButton>
        </div>
      ) : null,
  },
];

const initialRows = [
  {
    id: 1,
    name: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phone: "123-456-7890",
    course: "Biology",
    registrationDate: "2021-01-15",
  },
  {
    id: 2,
    name: "Bob",
    lastName: "Williams",
    email: "bob.williams@example.com",
    phone: "234-567-8901",
    course: "Chemistry",
    registrationDate: "2020-09-20",
  },
  // Other students' data
];

const StudentTable = ({ isAdmin }) => {
  const [rows, setRows] = useState(initialRows);
  const [selected, setSelected] = useState([]);

  const handleSelectionChange = (newSelection) => {
    setSelected(newSelection);
  };

  const handleEdit = (id) => {
    console.log("Edit student with ID:", id);
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
    console.log("Delete student with ID:", id);
  };

  const handleAttendanceChange = (id, newValue) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, attendance: newValue } : row
      )
    );
  };

  return (
    <Container>
      <Paper style={{ padding: 16, paddin_left: 0 }}>
        <Typography variant="h6" gutterBottom>
          Student List
        </Typography>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns(
              isAdmin,
              handleEdit,
              handleDelete,
              handleAttendanceChange
            )}
            pageSize={5}
            checkboxSelection={isAdmin}
            onSelectionModelChange={handleSelectionChange}
          />
        </div>
        {isAdmin && selected.length > 0 && (
          <div style={{ marginTop: 16 }}>
            <Typography variant="h6">
              Selected IDs: {selected.join(", ")}
            </Typography>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default StudentTable;
