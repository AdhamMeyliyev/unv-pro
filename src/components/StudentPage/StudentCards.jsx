import React, { useState } from 'react';
import { Grid, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button, CardMedia } from '@mui/material';
import StudentCard from './StudentCard';

const StudentCards = ({ courses }) => {
  const [openViewModal, setOpenViewModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleView = (course) => {
    setSelectedCourse(course);
    setOpenViewModal(true);
  };

  const handleJoin = (courseId) => {
    console.log(`Join course with ID: ${courseId}`);
    // Ro'yxatdan o'tish funksiyasini qo'shing
  };

  const handleViewClose = () => {
    setOpenViewModal(false);
    setSelectedCourse(null);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <StudentCard 
              course={course} 
              onJoin={() => handleJoin(course.id)} 
              onView={() => handleView(course)} 
            />
          </Grid>
        ))}
      </Grid>

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
    </div>
  );
};

export default StudentCards;
