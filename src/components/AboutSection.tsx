
import React from "react";

const AboutSection = () => (
  <section id="clinica" className="py-20 bg-gradient-to-t from-windgray to-white relative">
    <div className="container max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-windblue mb-8 text-center">Sobre WindClinic</h2>
      <p className="text-lg text-windblue text-center mb-8">
        WindClinic es una clínica de referencia orientada a la excelencia en Neurofisiología Clínica y Medicina del Sueño.
        <br />
        Ofrecemos atención cercana, diagnósticos precisos y soluciones integrales para mejorar tu calidad de vida.
      </p>
      <div className="flex flex-col md:flex-row md:justify-center gap-8 mt-8">
        <div className="flex-1 bg-white rounded-lg shadow p-6 min-w-[220px]">
          <h3 className="text-windblue font-bold text-lg mb-2">Valores</h3>
          <ul className="list-disc list-inside text-windblue">
            <li>Ética Profesional</li>
            <li>Empatía y Humanidad</li>
            <li>Innovación Médica</li>
            <li>Atención Personalizada</li>
          </ul>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow p-6 min-w-[220px]">
          <h3 className="text-windblue font-bold text-lg mb-2">Nuestra Misión</h3>
          <p className="text-windblue">
            Mejorar la salud neurológica y el bienestar de nuestros pacientes, combinando la ciencia con la calidez humana.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
