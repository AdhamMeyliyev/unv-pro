import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Avatar, Typography } from '@mui/material';

const ChatList = ({ user, onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (user && user.id) {
      // Foydalanuvchilarning chatlarini olish
      fetch(`/api/chats?userId=${user.id}`)
        .then(response => response.json())
        .then(data => setChats(data))
        .catch(error => console.error('Error fetching chats:', error));
    }
  }, [user]);

  return (
    <Box sx={{ width: '300px', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
      <Typography variant="h6" sx={{ padding: '16px' }}>Chats</Typography>
      <List>
        {chats.map((chat) => (
          <ListItem
            button
            key={chat.id}
            onClick={() => onSelectChat(chat)}
          >
            <Avatar src={chat.user.image} />
            <ListItemText
              primary={chat.user.name}
              secondary={chat.lastMessage}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatList;
