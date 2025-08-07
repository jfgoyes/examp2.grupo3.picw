// Parte 5: Torres Diaz Tiffani Nathalia
// Importa estilos y scripts de Bootstrap para darle diseño y funcionalidad al proyecto
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importa hooks de React y los componentes personalizados del proyecto
import { useState, useEffect, useMemo } from "react";
import ContactForm from "./components/FormularioContacto";
import ContactCard from "./components/VisualizacionContacto";
import ConfirmModal from "./components/ModalConfirmacion";

function App() {
// Estado para almacenar la lista de contactos
// Se inicializa con los datos guardados en localStorage, si existen
  const [contactos, setContactos] = useState(() => {
    const guardados = localStorage.getItem("contactos");
    return guardados ? JSON.parse(guardados) : [];
  });
 // Estado para saber qué contacto se está editando
  const [contactoEditar, setContactoEditar] = useState(null);
 // Estado para saber qué contacto se está por eliminar (usado en el modal)
  const [contactoEliminar, setContactoEliminar] = useState(null);
 // Estado para controlar el modo oscuro (true = oscuro, false = claro)
  const [modoOscuro, setModoOscuro] = useState(() => {
    const modoGuardado = localStorage.getItem('modoOscuro');
    return modoGuardado === 'true' ? true : false;
  });
 // Estado para manejar la búsqueda por nombre o campo similar
  const [busqueda, setBusqueda] = useState("");
  // Estado para manejar el orden de los contactos: "az" = ascendente, "za" = descendente
  const [orden, setOrden] = useState("az"); // "az" o "za"
  // Estado para filtrar por la letra inicial del nombre del contacto
  const [filtroLetra, setFiltroLetra] = useState(null); // null o "A", "B", ...
  // Guarda en localStorage el valor del modo oscuro cada vez que cambia
  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro);
  }, [modoOscuro]);
 // Guarda en localStorage la lista de contactos cada vez que se actualiza
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);
  // Función para agregar un nuevo contacto o editar uno existente
  const agregarContacto = (nuevo) => {
    // Si se está editando un contacto existente
    if (contactoEditar) {
     // Se reemplaza el contacto antiguo con el nuevo en la misma posición (mismo id)
      const actualizados = contactos.map((c) =>
        c.id === contactoEditar.id ? { ...nuevo, id: contactoEditar.id } : c
      );
      setContactos(actualizados);
      setContactoEditar(null);// Se deja de editar
    } else {
    // Si es un nuevo contacto, se agrega con un id único generado por Date.now()
      setContactos([...contactos, { ...nuevo, id: Date.now() }]);
    }
  };

}
