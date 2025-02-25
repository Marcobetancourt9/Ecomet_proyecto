import React from "react";

const App = () => {
  const redirectToLogin = () => {
    window.location.href = "inicio_sesión.html";
  };

  return (
    <div className="font-sans text-center bg-gray-100">
      <header className="flex justify-between items-center bg-blue-900 text-white p-14 relative">
        <button className="logo-button" onClick={redirectToLogin}>
          <img src="imagenes/Ecomet icon.png" alt="Ecomet Logo" className="w-48 absolute top-2 left-2" />
        </button>
        <button className="user-icon-button" onClick={redirectToLogin}>
          <img src="imagenes/icono inicio.png" alt="inicio Logo" className="w-48 absolute top-1 right-10" />
        </button>
      </header>

      <section className="hero bg-cover bg-center text-white text-center p-20" style={{ backgroundImage: "url('imagenes/fondo.png')" }}>
        <h1 className="text-4xl font-bold">Excursiones al Ávila <br /> para <span className="text-orange-500">UNIMETANOS</span></h1>
      </section>

      <section className="info bg-orange-500 p-10 flex justify-between items-center text-blue-900">
        <div>
          <h1 className="text-xl font-bold">¿Cansado de la rutina universitaria?</h1>
          <p>Únete a las excursiones de Ecomet y descubre la belleza del Ávila.</p>
          <p>¡Explora, aprende y disfruta con otros estudiantes!</p>
        </div>
        <img src="imagenes/imagen.png" alt="info" className="w-96" />
      </section>

      <section className="explora bg-blue-900 text-white p-5">
        <h2>¡Buscamos ser la plataforma líder en excursiones para estudiantes!</h2>
      </section>

      <section className="cta bg-cover bg-center text-white p-14" style={{ backgroundImage: "url('imagenes/fondo2.png')" }}>
        <h2>¿Qué esperas para iniciar tu primera aventura?</h2>
        <button className="bg-orange-500 text-white py-2 px-4 m-2" onClick={redirectToLogin}>Ver rutas</button>
        <button className="bg-green-600 text-white py-2 px-4 m-2" onClick={redirectToLogin}>¡Agenda ya!</button>
      </section>

      <section className="explora bg-blue-900 text-white p-5">
        <h2>Explora tu Parque Nacional 📌 </h2>
        <p className="text-orange-500 font-bold">¿Sabías que el Ávila es más que una montaña? Es un tesoro natural y cultural.</p>
        <div className="flex justify-center gap-5">
          {[
            { src: "imagenes/quintero.png", alt: "Quebrada Quintero", title: "Quebrada Quintero" },
            { src: "imagenes/teleferico.png", alt: "Antiguo Teleférico", title: "Antiguo Teleférico" },
            { src: "imagenes/lagunazo.png", alt: "Lagunazo", title: "Lagunazo" },
          ].map((ruta, index) => (
            <div key={index} className="text-center">
              <button onClick={redirectToLogin}>
                <img src={ruta.src} alt={ruta.alt} className="w-48 h-60" />
              </button>
              <h3>{ruta.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-blue-900 text-white p-5">
        <p>
          © Visita Caracas 2025 | Síguenos en:
          <a href="https://www.instagram.com/tu_usuario/" target="_blank" rel="noopener noreferrer" className="text-orange-500"> Instagram</a> |
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500"> Facebook</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
