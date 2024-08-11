import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddCourseCard = ({ onAddCourse }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        borderRadius: '16px', 
        boxShadow: 3, 
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', // Cardning balandligini to'liq qilish
        position: 'relative',
        cursor: 'pointer',
        border: '2px dashed #00B074' // Yangi kurs qo'shish uchun tasviriy ko'rinish
      }} 
      onClick={onAddCourse}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" component="div" gutterBottom>
          <AddIcon sx={{ fontSize: 60, color: '#00B074' }} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Add New Course
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AddCourseCard;
