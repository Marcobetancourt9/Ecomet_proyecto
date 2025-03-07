import React, { useState } from 'react';
import './inicio.css';

const Menu = ({ isOpen, onClose }) => (
    <div className={`menu-container ${isOpen ? 'open' : ''}`} onClick={onClose}>
        <div className="menu-content">
            <span className="close-menu">&times;</span>
            <a href="inicio.html"> 🌲 Inicio</a>
            <a href="#"> 🗓️ Reservar</a>
            <a href="#"> 🖼️ Rutas</a>
            <a href="consejos.html"> 🦺 Consejos de Seguridad</a>
            <a href="Editar_perfil.html"> 🪪 Editar Perfil</a>
            <a href="consultas.html"> 📫 Contactarnos</a>
            <a href="portada.html"> ❌ Cerrar Sesión</a>
        </div>
    </div>
);

const Section = ({ title, text, image }) => (
    <div className="section mountain">
        <div className="text-content">
            {title && <h2>{title}</h2>}
            <p>{text}</p>
        </div>
        <div className="info-content">
            <img src={image} alt={title} />
        </div>
    </div>
);

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="header">
                <img src="imagenes/Ecomet icon.png" alt="Ecomet Logo" className="logo" />
                <img src="imagenes/menu-icon.png" alt="Menú" className="menu" onClick={() => setMenuOpen(true)} />
            </div>
            <div className="fondo">
                <h1>La mejor opción para ir al <span className="highlight">Ávila</span></h1>
            </div>
            <Section
                title="¿Sabías qué?"
                text="A solo un paso de Caracas se encuentra el Parque Nacional El Ávila, un oasis natural perfecto para escapar de la rutina. Sus senderos para todos los niveles te invitan a disfrutar de la naturaleza."
                image="imagenes/caracas.png"
            />
            <Section
                text="El Ávila es mucho más que una montaña; es un símbolo de nuestra identidad y un lugar donde la naturaleza y la cultura se encuentran. Cada sendero es una invitación a explorar y a conectar con el alma de Venezuela."
                image="imagenes/avila.png"
            />
            <Section
                title="MISIÓN"
                text="Conectar a estudiantes universitarios con la naturaleza a través de actividades organizadas en el Ávila, promoviendo el bienestar y la conciencia ambiental."
                image="imagenes/mision.png"
            />
            <Section
                title="VISIÓN"
                text="Ser la plataforma líder en actividades al aire libre para estudiantes en Caracas, fomentando el turismo sostenible y la conservación del Ávila."
                image="imagenes/vision.png"
            />
            <div className="footer">
                <p>© Ecomet 2025 | Síguenos en: <a href="https://www.instagram.com/tu_usuario/" target="_blank" rel="noopener noreferrer">Instagram</a> | <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
            </div>
            <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
    );
};

export default App;