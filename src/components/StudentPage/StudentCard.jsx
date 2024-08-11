import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const StudentCard = ({ course, onJoin, onView }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: '16px', boxShadow: 3, overflow: 'visible' }}>
      <CardMedia
        component="img"
        alt={course.name}
        height="140"
        image={course.image}
        sx={{ borderRadius: '16px 16px 0 0', objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {course.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duration: {course.duration}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Start Date: {course.startDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          End Date: {course.endDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Instructor: {course.instructor}
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button 
            variant="contained"
            sx={{ width:'47%',
              backgroundColor: '#00B074',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#00996d'
              }
            }}
            onClick={onView}
          >
            View
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#007BFF',
              color: '#fff',
              width:'47%',
              '&:hover': {
                backgroundColor: '#0056b3'
              }
            }}
            onClick={onJoin}
          >
            Join
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
