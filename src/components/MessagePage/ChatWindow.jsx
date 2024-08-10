import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, List, ListItem } from '@mui/material';

const ChatWindow = ({ chat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (chat && chat.id) {
      // Tanlangan chat uchun xabarlarni olish
      fetch(`/api/messages?chatId=${chat.id}`)
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(error => console.error('Error fetching messages:', error));
    }
  }, [chat]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatId: chat.id,
          content: newMessage,
          timestamp: new Date().toISOString(),
        }),
      })
        .then(response => response.json())
        .then(message => {
          setMessages([...messages, message]);
          setNewMessage('');
        })
        .catch(error => console.error('Error sending message:', error));
    }
  };

  if (!chat) {
    return (
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6">Select a chat to start messaging</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        <Typography variant="h6" gutterBottom>
          Chat with {chat.user.name}
        </Typography>
        <List>
          {messages.map((msg) => (
            <ListItem key={msg.id}>
              <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
                {msg.content}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ padding: '16px', borderTop: '1px solid #ddd' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{ marginTop: '8px' }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
