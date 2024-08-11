import React, { useState } from 'react';
import { Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography, CardMedia } from '@mui/material';
import CourseCard from './CourseCard';
import AddCourseCard from './AddCourseCard';

const CourseCards = ({ courses, isAdminOrTeacher }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleView = (course) => {
    setSelectedCourse(course);
    setOpenViewModal(true);
  };

  const handleEdit = (courseId) => {
    const course = courses.find((c) => c.id === courseId);
    setSelectedCourse(course);
    setOpenEditModal(true);
  };

  const handleDelete = (courseId) => {
    const course = courses.find((c) => c.id === courseId);
    setSelectedCourse(course);
    setOpenDeleteModal(true);
  };

  const handleAddCourse = () => {
    setSelectedCourse({ name: '', duration: '', startDate: '', endDate: '', instructor: '', image: '' });
    setOpenAddModal(true);
  };

  const handleEditClose = () => {
    setOpenEditModal(false);
    setSelectedCourse(null);
  };

  const handleViewClose = () => {
    setOpenViewModal(false);
    setSelectedCourse(null);
  };

  const handleDeleteClose = () => {
    setOpenDeleteModal(false);
    setSelectedCourse(null);
  };

  const handleAddClose = () => {
    setOpenAddModal(false);
    setSelectedCourse(null);
  };

  const handleSaveChanges = () => {
    console.log('Kurs o\'zgartirildi:', selectedCourse);
    handleEditClose();
  };

  const handleConfirmDelete = () => {
    console.log('Kurs o\'chirildi:', selectedCourse.id);
    handleDeleteClose();
  };

  const handleAddNewCourse = () => {
    console.log('Yangi kurs qo\'shildi:', selectedCourse);
    handleAddClose();
  };

  return (
    <div>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard 
              course={course} 
              onEdit={() => handleEdit(course.id)} 
              onDelete={() => handleDelete(course.id)} 
              onView={() => handleView(course)} 
            />
          </Grid>
        ))}
        
          <Grid item xs={12} sm={6} md={4}>
            <AddCourseCard onAddCourse={handleAddCourse} />
          </Grid>
      
      </Grid>

      {/* Tahrirlash Modal */}
      <Dialog open={openEditModal} onClose={handleEditClose}>
        <DialogTitle>Kursni tahrirlash</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Course Name"
            type="text"
            fullWidth
            variant="outlined"
            value={selectedCourse?.name || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Duration"
            type="text"
            fullWidth
            variant="outlined"
            value={selectedCourse?.duration || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, duration: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Start Date"
            type="date"
            fullWidth
            variant="outlined"
            value={selectedCourse?.startDate || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, startDate: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="End Date"
            type="date"
            fullWidth
            variant="outlined"
            value={selectedCourse?.endDate || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, endDate: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="Instructor"
            type="text"
            fullWidth
            variant="outlined"
            value={selectedCourse?.instructor || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, instructor: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Course Image URL"
            type="text"
            fullWidth
            variant="outlined"
            value={selectedCourse?.image || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, image: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Ko'rish Modal */}
      <Dialog open={openViewModal} onClose={handleViewClose}>
        <DialogContent>
          <CardMedia
            component="img"
            alt={selectedCourse?.name}
            height="140"
            image={selectedCourse?.image}
            sx={{ borderRadius: '16px 16px 0 0', objectFit: 'cover' }}
          />
          <Typography variant="h6" component="div" gutterBottom>
            {selectedCourse?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Duration: {selectedCourse?.duration}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Start Date: {selectedCourse?.startDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            End Date: {selectedCourse?.endDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Instructor: {selectedCourse?.instructor}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleViewClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* O'chirish Modal */}
      <Dialog open={openDeleteModal} onClose={handleDeleteClose}>
        <DialogTitle>Kursni o'chirish</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete the course "{selectedCourse?.name}"?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Qo'shish Modal */}
      <Dialog open={openAddModal} onClose={handleAddClose}>
        <DialogTitle>Yangi Kurs Qo'shish</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Course Name"
            type="text"
            fullWidth
            variant="outlined"
            value={selectedCourse?.name || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Duration"
            type="text"
            fullWidth
            variant="outlined"
            value={selectedCourse?.duration || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, duration: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Start Date"
            type="date"
            fullWidth
            variant="outlined"
            value={selectedCourse?.startDate || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, startDate: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="End Date"
            type="date"
            fullWidth
            variant="outlined"
            value={selectedCourse?.endDate || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, endDate: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="Instructor"
            type="text"
            fullWidth
            variant="outlined"
            value={selectedCourse?.instructor || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, instructor: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Course Image URL"
            type="text"
            fullWidth
            variant="outlined"
            value={selectedCourse?.image || ''}
            onChange={(e) => setSelectedCourse({ ...selectedCourse, image: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddNewCourse} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CourseCards;
