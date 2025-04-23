
import React from "react";

const ContactSection = () => (
  <section id="contacto" className="py-20 bg-gradient-to-b from-white to-windgray">
    <div className="container max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-windblue mb-8">Contacto</h2>
      <p className="text-lg text-windblue mb-6">
        ¿Quieres más información o agendar una cita? Contáctanos y te responderemos lo antes posible.
      </p>
      <a
        href="mailto:info@windclinic.com"
        className="inline-block px-8 py-3 bg-windblue text-white rounded-lg shadow hover:bg-windblue-light transition font-semibold text-lg"
      >
        Enviar correo
      </a>
      <div className="mt-8 text-windblue/80">
        <p>Ubicación: C. Real, 37, 11540 Sanlúcar de Barrameda, Cádiz</p>
        <p>Tel: <a href="tel:+34956666046" className="underline">956 66 60 46</a></p>
      </div>
    </div>
  </section>
);

export default ContactSection;
