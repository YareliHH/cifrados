import React from 'react';
import '../Estilos/acercade.css'; // Asegúrate de crear y ajustar los estilos

const AcercaDe = () => {
    return (
        <div className="acerca-de-container">
            <h1>Acerca de Nosotros</h1>
            <p>
                <b>Misión:</b><br />
                Esta plataforma demuestra técnicas de cifrado y descifrado, incluyendo métodos simétricos, asimétricos y hash. Nuestro objetivo es ayudar a los usuarios a entender los algoritmos criptográficos y proporcionar herramientas interactivas para su uso.
            </p>
            <p>
                <b>Evolución de los Cifrados:</b><br />
                En Cifrados, nos dedicamos a explorar esta fascinante evolución de la criptografía. Ofrecemos una detallada de cómo las técnicas de cifrado han progresado a lo largo del tiempo, adaptándose a las crecientes demandas de seguridad en un mundo cada vez más digitalizado. Nuestro objetivo es proporcionar a los usuarios un entendimiento profundo de estos métodos, fomentando un uso más seguro y consciente de la tecnología en su vida cotidiana.</p>
            <p>
                <b>Desarrollado por:</b><br />
                Yareli Hernandez Hernandez, 7° "B"<br />
                Ing. Desarrollo y Gestión de Software<br />
                <a href="mailto:20221124@uthh.edu.mx">20221124@uthh.edu.mx</a>.
            </p>
        </div>
    );
};

export default AcercaDe;
