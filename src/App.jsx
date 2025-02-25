import React from "react";
import "./portada.css";

const App = () => {
  const redirectToLogin = () => {
    window.location.href = "inicio_sesión.html";
  };

  return (
    <div>
      <header>
        <button className="logo" onClick={redirectToLogin}>
          <img src="imagenes/Ecomet icon.png" alt="Ecomet Logo" />
        </button>
        <button className="user-icon" onClick={redirectToLogin}>
          <img src="imagenes/icono inicio.png" alt="inicio Logo" />
        </button>
      </header>

      <section className="hero">
        <h1>Excursiones al Ávila <br /> para <span className="highlight">UNIMETANOS</span></h1>
      </section>

      <section className="info">
        <div>
          <h1>¿Cansado de la rutina universitaria?</h1>
          <p>Únete a las excursiones de Ecomet y descubre la belleza del Ávila.</p>
          <p>¡Explora, aprende y disfruta con otros estudiantes!</p>
        </div>
        <img src="imagenes/imagen.png" alt="info" className="imge" />
      </section>

      <section className="explora">
        <h2>¡Buscamos ser la plataforma líder en excursiones para estudiantes!</h2>
      </section>

      <section className="cta">
        <h2>¿Qué esperas para iniciar tu primera aventura?</h2>
        <button className="orange" onClick={redirectToLogin}>Ver rutas</button>
        <button className="green" onClick={redirectToLogin}>¡Agenda ya!</button>
      </section>

      <section className="explora">
        <h2>Explora tu Parque Nacional 📌</h2>
        <p className="highlight">¿Sabías que el Ávila es más que una montaña? Es un tesoro natural y cultural.</p>
        <div className="rutas">
          {[
            { src: "imagenes/quintero.png", alt: "Quebrada Quintero", title: "Quebrada Quintero" },
            { src: "imagenes/teleferico.png", alt: "Antiguo Teleférico", title: "Antiguo Teleférico" },
            { src: "imagenes/lagunazo.png", alt: "Lagunazo", title: "Lagunazo" },
          ].map((ruta, index) => (
            <div key={index} className="ruta">
              <button onClick={redirectToLogin}>
                <img src={ruta.src} alt={ruta.alt} />
              </button>
              <h3>{ruta.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>
          © Visita Caracas 2025 | Síguenos en:
          <a href="https://www.instagram.com/tu_usuario/" target="_blank" rel="noopener noreferrer" className="highlight"> Instagram</a> |
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="highlight"> Facebook</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
