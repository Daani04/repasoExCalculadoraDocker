import React, { useState, useEffect } from 'react';

const [messages, setMessages] = useState([]);

useEffect(() => {
  // Eliminamos la carga del JSON
  setMessages([{
    role: "assistant",
    content: "¡Hola! ¿En qué puedo ayudarte hoy?"
  }]);
}, []);

const addMessage = (newMessage) => {
  setMessages(prevMessages => [...prevMessages, newMessage]);
}; 