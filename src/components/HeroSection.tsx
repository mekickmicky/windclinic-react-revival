
import React from "react";

const HeroSection = () => (
  <section
    id="inicio"
    className="flex items-center justify-center min-h-[80vh] bg-windgray relative pt-28 pb-12"
    style={{
      background:
        "radial-gradient(circle at 60% 50%, #AEE6F830 0%, #F8FAFF 100%)",
    }}
  >
    <div className="max-w-2xl mx-auto text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-windblue to-windblue-light bg-clip-text text-transparent leading-tight mb-6">
        Bienvenido a WindClinic
      </h1>
      <p className="text-lg md:text-xl text-windblue mb-8">
        Especialistas en Neurofisiología y Medicina del Sueño.<br />
        Atención integral y tecnología avanzada para tu salud.
      </p>
      <a
        href="#contacto"
        className="inline-block px-8 py-3 bg-windblue text-white rounded-lg shadow hover:bg-windblue-light transition font-semibold text-lg"
      >
        Solicita tu cita
      </a>
    </div>
  </section>
);

export default HeroSection;
