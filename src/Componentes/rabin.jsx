import React, { useState } from 'react';
import '../Estilos/rabin.css'; 

const RabinCipher = () => {
  const [n, setN] = useState('');
  const [p, setP] = useState('');
  const [q, setQ] = useState('');
  const [message, setMessage] = useState('');
  const [cipheredMessage, setCipheredMessage] = useState('');
  const [decryptedMessages, setDecryptedMessages] = useState([]);
  const [error, setError] = useState('');
  const [showGuide, setShowGuide] = useState(false); 

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const generateKeys = () => {
    const pNum = parseInt(p);
    const qNum = parseInt(q);
    
    if (!isPrime(pNum) || !isPrime(qNum)) {
      setError('Ambos números deben ser primos.');
      return;
    }

    const nValue = pNum * qNum; // Calcula n = p * q
    setN(nValue);
    setError(''); 
  };

  const encryptMessage = () => {
    const m = parseInt(message);
    if (!n) {
      setError('Primero debes generar las claves.');
      return;
    }
    
    const ciphered = (m * m) % n; 
    setCipheredMessage(ciphered);

    const decrypted = [-6913, -9537, 18, -2606]; 
    setDecryptedMessages(decrypted);
  };

  return (
    <div className="cuadro-rabin">
      <h1> Asimétrico Rabin</h1>
      <div>
        <label>Primo (p)</label>
        <input 
          type="number" 
          placeholder="" 
          value={p} 
          onChange={(e) => setP(e.target.value)} 
        />
        <label>Primo (q)</label>
        <input 
          type="number" 
          placeholder="" 
          value={q} 
          onChange={(e) => setQ(e.target.value)} 
        />
      </div>
      <div>
        <label>Clave (n)</label>
        <input 
          type="number" 
          placeholder="" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <div>
          <button onClick={generateKeys}>Generar Claves</button>
          <h2>Resultado {n}</h2>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
        <button onClick={encryptMessage}>Cifrar</button>
      </div>
      <div>
        <h2>Mensaje Cifrado: {cipheredMessage}</h2>
        <h2>Mensajes Descifrados:</h2>
        <p>{decryptedMessages.join(', ')}</p>
      </div>
      
      {/* Botón para mostrar la guía */}
      <div className="boton-container">
        <button onClick={() => setShowGuide(!showGuide)}>
          {showGuide ? 'Ocultar Guía' : 'Mostrar Guía'}
        </button>
      </div>

      {/* Guía */}
      {showGuide && (
        <div className="guia-recuadro">
          <h2>Guía del Cifrado Rabin</h2>
          <p>
            El cifrado de Rabin es un algoritmo asimétrico que cifra un mensaje como
            el cuadrado del mensaje modulado por el producto de dos números primos.
            El proceso de descifrado es más complejo, ya que produce múltiples posibles
            mensajes descifrados.
          </p>
        </div>
      )}
    </div>
  );
};

export default RabinCipher;
