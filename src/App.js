// Parte 5: Torres Diaz Tiffani Nathalia

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState, useEffect, useMemo } from "react";
import ContactForm from "./components/FormularioContacto";
import ContactCard from "./components/VisualizacionContacto";
import ConfirmModal from "./components/ModalConfirmacion";

function App() {
  const [contactos, setContactos] = useState(() => {
    const guardados = localStorage.getItem("contactos");
    return guardados ? JSON.parse(guardados) : [];
  });

  const [contactoEditar, setContactoEditar] = useState(null);
  const [contactoEliminar, setContactoEliminar] = useState(null);
  const [modoOscuro, setModoOscuro] = useState(() => {
    const modoGuardado = localStorage.getItem('modoOscuro');
    return modoGuardado === 'true' ? true : false;
  });

  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("az"); // "az" o "za"
  const [filtroLetra, setFiltroLetra] = useState(null); // null o "A", "B", ...

  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro);
  }, [modoOscuro]);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevo) => {
    if (contactoEditar) {
      const actualizados = contactos.map((c) =>
        c.id === contactoEditar.id ? { ...nuevo, id: contactoEditar.id } : c
      );
      setContactos(actualizados);
      setContactoEditar(null);
    } else {
      setContactos([...contactos, { ...nuevo, id: Date.now() }]);
    }
  };
