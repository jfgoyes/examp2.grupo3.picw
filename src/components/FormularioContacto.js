// Parte 1: Armijos Hurtado Klever Stalin

import { useState, useEffect } from "react";

function FormularioContacto({ onAdd, contactoEditar, modoOscuro }) {
  const [contact, setContact] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  useEffect(() => {
    if (contactoEditar) {
      setContact(contactoEditar);
    }
  }, [contactoEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact.nombre || !contact.email || !contact.telefono || !contact.direccion) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      alert("Correo electrónico no válido.");
      return;
    }

    if (!/^\d+$/.test(contact.telefono)) {
      alert("El teléfono solo debe contener números.");
      return;
    }

    onAdd(contact);
    setContact({ nombre: "", email: "", telefono: "", direccion: "" });
  };
  
  const inputClass = modoOscuro
    ? "form-control bg-secondary text-white border-0"
    : "form-control";