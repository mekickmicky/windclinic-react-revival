
import React from "react";

const doctors = [
  { name: "Dra. Sara Romero", role: "Neurofisióloga Clínica" },
  { name: "Dr. Juan Pérez", role: "Especialista en Medicina del Sueño" },
];

const TeamPreview = () => (
  <section id="equipo" className="py-20 bg-windgray">
    <div className="container max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-windblue mb-10">Nuestro Equipo</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {doctors.map((doc) => (
          <div key={doc.name} className="bg-white rounded-lg shadow p-6 flex-1 animate-fade-in">
            <div className="w-20 h-20 bg-windblue-light/30 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-windblue">{doc.name.split(" ")[1][0]}</span>
            </div>
            <h4 className="font-semibold text-windblue text-lg mb-1">{doc.name}</h4>
            <p className="text-windblue">{doc.role}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-windblue text-base">Un equipo de expertos comprometidos con tu salud.</p>
    </div>
  </section>
);

export default TeamPreview;
