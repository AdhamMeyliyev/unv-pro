import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const MessagePage = ({ user }) => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  if (!user || !user.id) {
    return (
      <Container maxWidth="lg">
        <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
          <Typography variant="h6">User information is missing</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box display="flex" height="100vh">
        <ChatList user={user} onSelectChat={handleSelectChat} />
        <ChatWindow chat={selectedChat} />
      </Box>
    </Container>
  );
};

export default MessagePage;
