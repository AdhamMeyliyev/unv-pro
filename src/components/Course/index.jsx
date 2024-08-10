import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';

const CourseCard = ({ course }) => {
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
        <Box mt={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00B074',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#00996d'
              }
            }}
            fullWidth
          >
            Register
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const CourseCards = ({ courses }) => {
  return (
    <Grid container spacing={3}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.id}>
          <CourseCard course={course} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseCards;
