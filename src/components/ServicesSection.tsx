
import React from "react";

const services = [
  {
    title: "Neurofisiología Clínica",
    desc: "Diagnóstico y tratamiento de trastornos del sistema nervioso usando tecnología avanzada.",
    icon: (
      <svg className="w-8 h-8 text-windblue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h.01"/><path d="M16 15h.01"/><path d="M12 11v2"/><path d="M12 7v2"/></svg>
    ),
  },
  {
    title: "Medicina del Sueño",
    desc: "Estudio y tratamiento de trastornos del sueño como insomnio y apnea, con enfoque humano.",
    icon: (
      <svg className="w-8 h-8 text-windblue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 11-9-9 7 7 0 009 9z"/><path d="M9 13h.01"/><path d="M15 13h.01"/></svg>
    ),
  },
  {
    title: "Pruebas Diagnósticas",
    desc: "Realizamos EEG, EMG, PSG y otros estudios con resultados fiables y rápidos.",
    icon: (
      <svg className="w-8 h-8 text-windblue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>
    ),
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-20 bg-white relative">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-windblue mb-12">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map(({ title, desc, icon }) => (
          <div key={title} className="bg-windgray rounded-xl shadow hover:shadow-lg transition p-8 flex flex-col items-center text-center animate-fade-in">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-windblue mb-2">{title}</h3>
            <p className="text-windblue text-base">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
