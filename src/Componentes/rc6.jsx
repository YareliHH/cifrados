import React, { useState } from 'react';
import '../Estilos/rc6.css'; 

const rc6Encrypt = (text, key) => {
  let encrypted = "";
  for (let i = 0; i < text.length; i++) {
    encrypted += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return btoa(encrypted); 
};

const rc6Decrypt = (ciphertext, key) => {
  if (!ciphertext) {
    throw new Error("Texto cifrado vacío.");
  }
  let decrypted = "";
  try {
    const decoded = atob(ciphertext); 
    for (let i = 0; i < decoded.length; i++) {
      decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
  } catch (error) {
    throw new Error("Error al decodificar: " + error.message);
  }
  return decrypted;
};

const RC6Cipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");
  const [showGuide, setShowGuide] = useState(false);

  const handleEncrypt = () => {
    const ciphertext = rc6Encrypt(text, key);
    setResult(ciphertext);
  };

  const handleDecrypt = () => {
    try {
      const originalText = rc6Decrypt(result, key);
      setResult(originalText);
    } catch (error) {
      alert(error.message); 
    }
  };

  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Texto copiado al portapapeles"); 
      })
      .catch((error) => {
        console.error("Error al copiar:", error);
      });
  };

  return (
    <div className="cuadro-rc6">
      <h1>Cifrado RC6</h1>
      <input
        type="text"
        placeholder="Ingresa el texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={4}
      />
      <input
        type="text"
        placeholder="Ingresa la clave"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        maxLength={4}
      />
      <div className="botones-cifrado">
        <button onClick={handleEncrypt}>Cifrar</button>
        <button onClick={handleDecrypt}>Descifrar</button>
      </div>
      <button onClick={toggleGuide}>{showGuide ? 'Ocultar Guía' : 'Mostrar Guía'}</button>

      <h2>Resultado:</h2>
      <div className="resultado">{result}</div>

      {/* Mostrar el recuadro de la guía si está activado */}
      {showGuide && (
        <div className="guia-recuadro">
          <h2>Guía del Cifrado RC6</h2>
          <p>El cifrado RC6 es un algoritmo de cifrado simétrico que opera en bloques de 4 bytes.</p>
          <p>Para utilizar este cifrado:</p>
          <ol>
            <li>Ingresa un texto de exactamente 4 caracteres.</li>
            <li>Ingresa una clave de exactamente 4 caracteres.</li>
            <li>Presiona "Cifrar" para encriptar el texto o "Descifrar" para desencriptarlo.</li>
            <li>El resultado aparecerá en la sección de resultados.</li>
          </ol>
          <p>Nota: El texto y la clave deben ser de 4 caracteres para que funcione correctamente.</p>
        </div>
      )}
    </div>
  );
};

export default RC6Cipher;
