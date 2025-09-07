import React from 'react';
import Terminal from 'react-terminal-ui';

export default function TerminalComponent() {
  return (
    <div style={{
      width: '600px',
      height: '300px',
      position: 'absolute',
      top:'200px',
      marginLeft: '30px',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 0 10px rgba(0, 0, 0, 1)'
    }}>
      <Terminal
        promptSymbol="$"
        theme={{
          background: '#2E3436',
          promptSymbolColor: '#00FF00',
          textColor: '#FFFFFF',
        }}
      >
        <div>¡Bienvenido a la terminal de Debian de Álex!</div>
        <div>Escribe 'help' para ver los comandos disponibles.</div>
      </Terminal>
    </div>
  );
}
