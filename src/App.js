// Parte 5: Torres Diaz Tiffani Nathalia

// Importamos los estilos de Bootstrap para los componentes visuales
import 'bootstrap/dist/css/bootstrap.min.css';
// Importamos los scripts necesarios de Bootstrap para funcionalidades interactivas como modales y dropdowns
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importamos hooks de React para manejo de estado, efectos y optimización de cálculos
import { useState, useEffect, useMemo } from "react";
// Importamos el componente para el formulario de contacto
import ContactForm from "./components/FormularioContacto";
// Importamos el componente visual que muestra cada contacto
import ContactCard from "./components/VisualizacionContacto";
// Importamos el componente para el modal de confirmación al eliminar
import ConfirmModal from "./components/ModalConfirmacion";

function App() {
  // Creamos el estado para los contactos, inicializándolo con datos del localStorage si existen
  const [contactos, setContactos] = useState(() => {
    const guardados = localStorage.getItem("contactos");
    return guardados ? JSON.parse(guardados) : [];
  });

  // Creamos el estado para almacenar temporalmente el contacto que se está editando
  const [contactoEditar, setContactoEditar] = useState(null);
  // Creamos el estado para almacenar temporalmente el contacto que se desea eliminar
  const [contactoEliminar, setContactoEliminar] = useState(null);
  // Creamos el estado para alternar entre modo claro y oscuro, persistiendo en localStorage
  const [modoOscuro, setModoOscuro] = useState(() => {
    const modoGuardado = localStorage.getItem('modoOscuro');
    return modoGuardado === 'true' ? true : false;
  });

  // Creamos el estado para el término de búsqueda
  const [busqueda, setBusqueda] = useState("");
  // Creamos el estado para el orden alfabético de la lista (A-Z o Z-A)
  const [orden, setOrden] = useState("az");
  // Creamos el estado para filtrar por letra inicial del nombre
  const [filtroLetra, setFiltroLetra] = useState(null);

  // Implementamos efecto para guardar en localStorage el modo oscuro cada vez que cambia
  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro);
  }, [modoOscuro]);

  // Implementamos efecto para guardar en localStorage los contactos cada vez que cambian
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  // Creamos la función para agregar un contacto nuevo o actualizar uno existente
  const agregarContacto = (nuevo) => {
    if (contactoEditar) {
      // Si se está editando, actualizamos el contacto con el mismo id
      const actualizados = contactos.map((c) =>
        c.id === contactoEditar.id ? { ...nuevo, id: contactoEditar.id } : c
      );
      setContactos(actualizados);
      setContactoEditar(null);
    } else {
      // Si es nuevo, lo agregamos al array con un id generado por Date.now()
      setContactos([...contactos, { ...nuevo, id: Date.now() }]);
    }
  };

// Parte 6: Yampuezan Burbano Veronica Janeth

  // Creamos la función para eliminar un contacto por su id
  const eliminarContacto = (id) => {
    const filtrados = contactos.filter((c) => c.id !== id);
    setContactos(filtrados);
    setContactoEliminar(null);
  };

  // Implementamos useMemo para filtrar y ordenar los contactos según búsqueda, filtro y orden
  const contactosFiltrados = useMemo(() => {
    let result = [...contactos];

    // Aplicamos filtro por letra inicial si está activo
    if (filtroLetra) {
      result = result.filter(c =>
        c.nombre.toLowerCase().startsWith(filtroLetra.toLowerCase())
      );
    }

    // Aplicamos búsqueda por nombre o email si el campo de búsqueda no está vacío
    if (busqueda.trim() !== "") {
      const b = busqueda.toLowerCase();
      result = result.filter(c =>
        c.nombre.toLowerCase().includes(b) || c.email.toLowerCase().includes(b)
      );
    }

    // Ordenamos alfabéticamente de A-Z o Z-A según la opción seleccionada
    result.sort((a, b) => {
      if (orden === "az") {
        return a.nombre.localeCompare(b.nombre);
      } else {
        return b.nombre.localeCompare(a.nombre);
      }
    });

    return result;
  }, [contactos, busqueda, orden, filtroLetra]);

  // Creamos una lista de letras únicas con las que empiezan los nombres de los contactos
  const letrasUnicas = useMemo(() => {
    const letras = new Set(contactos.map(c => c.nombre[0].toUpperCase()));
    return Array.from(letras).sort();
  }, [contactos]);

// Parte 7: Goyes Arcalle Job Francesco

  return (
    // Creamos un contenedor principal con clases de Bootstrap y modo oscuro/claro
    <div className={`container py-4 ${modoOscuro ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ minHeight: '100vh' }}>
      
      {/* Mostramos los nombres de los integrantes del grupo */}
      <h2 className="text-center mb-4">Proyecto final - Grupo 3</h2>
      <h2 className="text-center mb-4">Herrera Juela Willian Adrian</h2>
      <h2 className="text-center mb-4">Torres Diaz Tiffani Nathalia</h2>
      <h2 className="text-center mb-4">Paguay Bonilla Julio Cesar</h2>
      <h2 className="text-center mb-4">Armijos Hurtado Klever Stalin</h2>
      <h2 className="text-center mb-4">Goyes Arcalle Job Francesco</h2>
      <h2 className="text-center mb-4">Yampuezan Burbano Veronica Janeth</h2>
      <h2 className="text-center mb-4">Caluña Rojas Steven German</h2>

      {/* Implementamos botón para alternar entre modo oscuro y claro */}
      <div className="d-flex justify-content-end mb-3">
        <button
          className={`btn btn-sm ${modoOscuro ? 'btn-light' : 'btn-dark'}`}
          onClick={() => setModoOscuro(!modoOscuro)}
          aria-label="Alternar modo oscuro"
        >
          {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>

      {/* Renderizamos el formulario de contacto */}
      <ContactForm onAdd={agregarContacto} contactoEditar={contactoEditar} modoOscuro={modoOscuro} />

      {/* Implementamos campo de búsqueda por nombre o correo */}
      <div className="mb-3">
        <input
          type="text"
          className={`form-control ${modoOscuro ? 'bg-secondary text-light border-0' : ''}`}
          placeholder="Buscar por nombre o email..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Creamos controles de filtro por letra y ordenamiento */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        
        {/* Botones para filtrar contactos por letra inicial */}
        <div>
          <button
            className={`btn btn-sm me-1 mb-1 ${filtroLetra === null ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFiltroLetra(null)}
          >
            Todas
          </button>
          {letrasUnicas.map((letra) => (
            <button
              key={letra}
              className={`btn btn-sm me-1 mb-1 ${filtroLetra === letra ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFiltroLetra(letra)}
            >
              {letra}
            </button>
          ))}
        </div>

        {/* Selector para cambiar el orden de visualización */}
        <div>
          <select
            className={`form-select form-select-sm ${modoOscuro ? 'bg-secondary text-light border-0' : ''}`}
            value={orden}
            onChange={e => setOrden(e.target.value)}
          >
            <option value="az">Ordenar A-Z</option>
            <option value="za">Ordenar Z-A</option>
          </select>
        </div>
      </div>

      {/* Mostramos el listado de contactos filtrados */}
      <div className="row">
        {contactosFiltrados.length === 0 ? (
          // Mostramos mensaje si no hay coincidencias
          <p className={`text-center ${modoOscuro ? 'text-light-50' : 'text-muted'}`}>No hay contactos que coincidan.</p>
        ) : (
          // Mostramos cada contacto usando el componente ContactCard
          contactosFiltrados.map((c) => (
            <ContactCard
              key={c.id}
              contacto={c}
              onEditar={() => setContactoEditar(c)}
              onEliminar={() => setContactoEliminar(c)}
              modoOscuro={modoOscuro}
            />
          ))
        )}
      </div>

      {/* Mostramos el modal de confirmación al eliminar un contacto */}
      {contactoEliminar && (
        <ConfirmModal
          contacto={contactoEliminar}
          onConfirm={() => eliminarContacto(contactoEliminar.id)}
          onCancel={() => setContactoEliminar(null)}
          modoOscuro={modoOscuro}
        />
      )}
    </div>
  );
}

// Exportamos el componente principal App para ser usado en otros archivos
export default App;
