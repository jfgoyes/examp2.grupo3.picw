// Parte 3: Caluña Rojas Steven German

// Definimos una funcion llamada... "VisualizacionContacto" 
function VisualizacionContacto({ contacto, onEditar, onEliminar, modoOscuro }) {

  //  Extraemos las  propiedades del objeto y las asignamos a variables con el mismo nombre
  const { nombre, email, telefono, direccion } = contacto;

  //  Retorna una estructura JS que define la interfaz del usuario.
  return (
     //  Contenedor principal con clases de Bootstrap para la columna y margen inferior
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">

            {/* Párrafo con los datos del contacto: email, teléfono y dirección */}
            <strong>Email:</strong> {email} <br /> 
            <strong>Teléfono:</strong> {telefono} <br />
            <strong>Dirección:</strong> {direccion}
          </p>

           {/* Botones para editar y eliminar, dispuestos en un espacio entre ellos */}
          <div className="d-flex justify-content-between">

              {/* Botón para editar el contacto. Llama a la función onEditar al hacer clic */}
            <button className="btn btn-primary btn-sm" onClick={onEditar}>
              Editar
            </button>
             {/* Botón para eliminar el contacto. Llama a la función onEliminar al hacer clic */}
            <button className="btn btn-danger btn-sm" onClick={onEliminar}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualizacionContacto;