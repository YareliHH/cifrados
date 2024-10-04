import React from 'react';
import '../Estilos/informacion.css'; 

const Informacion = () => {
  return (
    <div className="cuadro">
      <h1>Guía de Cifrados</h1>
      <p>En esta sección puedes leer información sobre diferentes tipos de cifrado.</p>
      <ul>
  <li>
    <b>Cifrado César</b>: Sustitución de letras desplazadas por un número fijo en el alfabeto.
  </li>
  <li>
    <b>Escítala</b>: Dispositivo espartano que usa un cilindro para cifrar mensajes enrollados en tira de cuero o papiro.
  </li>
  <li>
    <b>Cifrado de sustitución</b>: Reemplazo de letras o símbolos según un esquema específico.
  </li>
  <li>
    <b>Cifrado de transposición</b>: Reorganización de letras del mensaje original en un patrón predefinido.
  </li>
  <li>
    <b>Cifrado Simétrico RC6</b>: Algoritmo de bloques de 128 bits con claves de 128, 192 o 256 bits; eficiente y seguro.
  </li>
  <li>
    <b>Cifrado Asimétrico Rabin</b>: Basado en la factorización de grandes primos; menos común por múltiples soluciones en descifrado.
  </li>
  <li>
    <b>Cifrado Hash BLAKE2</b>: Función hash rápida y segura que asegura la integridad del mensaje.
  </li>
</ul>
      <h2>Comparación: Cifrado César vs. Escítala</h2>
      <table className="tabla-cifrado">
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Cifrado César</th>
            <th>Escítala</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tipo de Cifrado</td>
            <td>Sustitución</td>
            <td>Transposición</td>
          </tr>
          <tr>
            <td>Clave</td>
            <td>Desplazamiento fijo de letras</td>
            <td>Cilindro con longitud variable</td>
          </tr>
          <tr>
            <td>Facilidad de uso</td>
            <td>Fácil de implementar</td>
            <td>Requiere un dispositivo físico</td>
          </tr>
          <tr>
            <td>Seguridad</td>
            <td>Poca seguridad contra ataques modernos</td>
            <td>Más complejo, pero susceptible a análisis de frecuencia</td>
          </tr>
          <tr>
            <td>Historia</td>
            <td>Utilizado por Julio César</td>
            <td>Utilizado por los espartanos</td>
          </tr>
        </tbody>
      </table>
      <h2>Comparación: RC6 vs. Rabin vs. BLAKE2</h2>
<table className="tabla-cifrado">
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>RC6</th>
      <th>Rabin</th>
      <th>BLAKE2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tipo de Cifrado</td>
      <td>Simétrico</td>
      <td>Asimétrico</td>
      <td>Función Hash</td>
    </tr>
    <tr>
      <td>Tamaño de Clave</td>
      <td>128, 192 o 256 bits</td>
      <td>Dependiente de la longitud de los primos</td>
      <td>No aplica</td>
    </tr>
    <tr>
      <td>Uso</td>
      <td>Para cifrado de datos en bloques</td>
      <td>Para cifrado de mensajes y autenticación</td>
      <td>Para verificar la integridad de datos</td>
    </tr>
    <tr>
      <td>Seguridad</td>
      <td>Alto nivel de seguridad en hardware y software</td>
      <td>Menos común por su complejidad en descifrado</td>
      <td>Alta seguridad y rápida ejecución</td>
    </tr>
    <tr>
      <td>Aplicaciones</td>
      <td>Redes seguras, almacenamiento de datos</td>
      <td>Criptografía de clave pública</td>
      <td>Verificación de integridad en archivos y mensajes</td>
    </tr>
  </tbody>
</table>

      <h2>Comparación: Laravel vs. React</h2>
<table className="tabla-cifrado">
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>Laravel</th>
      <th>React</th>
    </tr>
  </thead>
  <tbody>
  <tr>
  <td>Facilidad de Implementación</td>
  <td>Laravel es un framework PHP que permite crear aplicaciones web rápidamente con una estructura organizada, en este caso se implementan librerias </td>
  <td>React facilita la creación de interfaces interactivas y reactivas, facilitando la implementacion de metodos de cifrados</td>
</tr>
<tr>
  <td>Rendimiento</td>
  <td>Laravel optimiza el rendimiento a través de características como el almacenamiento en caché, en ello maneja grandes aplicaciones</td>
  <td>Rápido y eficiente, lo que permite actualizar solo las partes de la interfaz que cambian como en este caso.</td>
</tr>
<tr>
  <td>Compatibilidad</td>
  <td>Requiere conocimientos de PHP y patrones de diseño como MVC, lo que puede ser un desafío para nuevos desarrolladores.</td>
  <td>Más fácil para desarrolladores con conocimientos en JavaScript, permitiendo una curva de aprendizaje más suave.</td>
</tr>
<tr>
  <td>Integracion</td>
  <td>Utiliza Composer para gestionar dependencias y facilita la integración de librerías, aunque puede requerir configuración adicional.</td>
  <td>Permite una integración rápida de librerías de cifrado debido a su ecosistema moderno y su enfoque en componentes.</td>
</tr>
  </tbody>
</table>
    </div>
  );
};

export default Informacion;
