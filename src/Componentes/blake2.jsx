import React, { useState } from 'react';
import { blake2b } from 'blakejs';
import '../Estilos/blake2.css'; 

const Blake2Hash = () => {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');
  const [showGuide, setShowGuide] = useState(false); 

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const calculateHash = () => {
    const data = new TextEncoder().encode(input);
    const hashBuffer = blake2b(data);
    
    const hashHex = Array.from(hashBuffer)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
      
    setHash(hashHex);
  };

  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <div className="hash-container">
      <h1>Generador de Hash Blake2</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Ingresa el texto"
        className="hash-input"
      />
      <button onClick={calculateHash} className="hash-button">Generar Hash</button>
      {hash && (
        <div className="hash-result">
          <h2>Resultado</h2>
          <p>{hash}</p>
        </div>
      )}
      <button onClick={toggleGuide} className="hash-button">
        {showGuide ? 'Ocultar Guía' : 'Mostrar Guía'}
      </button>
      {showGuide && (
        <div className="guia-recuadro">
          <h2>Guía del Generador de Hash Blake2</h2>
          <p>El algoritmo de hash Blake2 es una función de hash criptográfica rápida y segura.</p>
          <p>Para utilizar este generador:</p>
          <ol>
            <li>Ingresa el texto que deseas hashear en el campo de entrada.</li>
            <li>Presiona el botón "Generar Hash" para calcular el hash.</li>
            <li>El hash resultante se mostrará debajo del botón.</li>
          </ol>
          <p>Nota: El hash es un valor de longitud fija que representa de manera única el contenido del texto ingresado. Cambiar incluso un solo carácter en el texto generará un hash completamente diferente.</p>
        </div>
      )}
    </div>
  );
};

export default Blake2Hash;
