import React, { useState } from 'react';
import AIChatHistory from './components/AIChatHistory';

function App() {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (message) => {
    setLoading(true);
    try {
      // Aquí iría tu lógica para enviar el mensaje al backend
      // Por ahora simulamos una respuesta
      const response = "Esta es una respuesta simulada";
      setLoading(false);
      return response;
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      return "Lo siento, ha ocurrido un error.";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat con IA</h1>
      </header>
      <main>
        <AIChatHistory onSubmit={handleSubmit} loading={loading} />
      </main>
    </div>
  );
}

export default App; 