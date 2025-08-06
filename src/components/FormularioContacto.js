// Parte 1: Armijos Hurtado Klever Stalin
// Importamos los comnpponentes de React necesarios
import { useState, useEffect } from "react";

// Definimos el componente FormularioContacto
// Recibe como props:
// - onAdd: función para agregar o actualizar un contacto
// - contactoEditar: datos del contacto a editar (si existe)
// - modoOscuro: booleano para cambiar el estilo del formulario ojo es la parte del compañero Paguay Bonilla Julio Cesar
function FormularioContacto({ onAdd, contactoEditar, modoOscuro }) {
  
  // Estado local para guardar la información del contacto
  const [contact, setContact] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  // useEffect: Si se recibe un contacto para editar,
  // se cargan automáticamente sus datos en el formulario como manada la actrividad 
  useEffect(() => {
    if (contactoEditar) {
      setContact(contactoEditar);
    }
  }, [contactoEditar]);

  // Función que se ejecuta cuando cambia un input
  // Actualiza el estado con el valor correspondiente
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setContact({ ...contact, [name]: value }); 
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    // Validación: verificar que todos los campos estén llenos
    if (!contact.nombre || !contact.email || !contact.telefono || !contact.direccion) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Validación: formato correcto de correo electrónico
    if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      alert("Correo electrónico no válido.");
      return;
    }

    // Validación: que el teléfono contenga solo números y ningun otyro carácter
    if (!/^\d+$/.test(contact.telefono)) {
      alert("El teléfono solo debe contener números.");
      return;
    }

    // Si pasa las validaciones, se ejecuta la función onAdd
    onAdd(contact);

    // Se reinician los campos del formulario
    setContact({ nombre: "", email: "", telefono: "", direccion: "" });
  };
  
  // Estilo de los inputs dependiendo del modo oscuro
  const inputClass = modoOscuro
    ? "form-control bg-secondary text-white border-0"
    : "form-control";

  // Parte 2: Paguay Bonilla Julio Cesar

<<<<<<< HEAD
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            value={contact.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Correo electrónico"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="telefono"
            className="form-control"
            placeholder="Teléfono"
            value={contact.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="direccion"
            className="form-control"
            placeholder="Dirección"
            value={contact.direccion}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success w-100">
        {contactoEditar ? "Guardar Cambios" : "Agregar Contacto"}
      </button>
    </form>
  );
}

=======
return (
  // Se retorna un formulario que ejecuta la función handleSubmit cuando se envía
  <form onSubmit={handleSubmit} className="mb-4">
    <div className="row"> {/* Contenedor con clase row para usar el sistema de grillas de Bootstrap */}
      
      <div className="col-md-6 mb-3"> {/* Columna que ocupa 6 columnas del grid en pantallas medianas */}
        <input
          type="text" // Campo de entrada tipo texto
          name="nombre" // Nombre del campo para identificarlo
          className="form-control" // Clase de Bootstrap para estilo del input
          placeholder="Nombre" // Texto que se muestra cuando el campo está vacío
          value={contact.nombre} // Valor del campo asociado al estado contact.nombre
          onChange={handleChange} // Función que actualiza el estado cuando el usuario escribe
          required // Campo obligatorio
        />
      </div>

      <div className="col-md-6 mb-3">
        <input
          type="email" // Campo de entrada para correos electrónicos
          name="email"
          className="form-control"
          placeholder="Correo electrónico"
          value={contact.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <input
          type="text" // Campo de texto para ingresar número de teléfono
          name="telefono"
          className="form-control"
          placeholder="Teléfono"
          value={contact.telefono}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <input
          type="text" // Campo de texto para ingresar dirección
          name="direccion"
          className="form-control"
          placeholder="Dirección"
          value={contact.direccion}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <button type="submit" className="btn btn-success w-100">
      {/* Botón que cambia el texto dependiendo si se está editando o agregando un contacto */}
      {contactoEditar ? "Guardar Cambios" : "Agregar Contacto"}
    </button>
  </form>
);
}

// Exporta el componente FormularioContacto para que pueda ser utilizado en otros archivos
>>>>>>> d82b9b8ec3ee0adfd914a8c0c6d40f18ce88c6f7
export default FormularioContacto;