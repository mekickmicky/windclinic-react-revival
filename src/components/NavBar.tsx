
import React from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Clínica", href: "#clinica" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const NavBar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm transition-all">
    <div className="container flex items-center justify-between h-16">
      <a href="#inicio" className="flex items-center gap-2 font-bold text-windblue">
        <span className="text-2xl tracking-tight">WindClinic</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 font-semibold text-windblue">
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="hover:text-windblue-light transition-colors">{label}</a>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        {/* Simple hamburger for mobile; can implement real menu later if desired */}
        <button
          className="w-8 h-8 flex items-center justify-center text-windblue"
          title="Open menu"
        >
          <span className="w-6 h-1 bg-windblue block rounded mb-1"></span>
          <span className="w-6 h-1 bg-windblue block rounded mb-1"></span>
          <span className="w-6 h-1 bg-windblue block rounded"></span>
        </button>
      </div>
    </div>
  </nav>
);

export default NavBar;
