// Parte 4: Herrera Juela Willian Adrian

// Componente ModalConfirmacion: muestra una ventana emergente para confirmar si el usuario quiere eliminar un contacto
function ModalConfirmacion({ contacto, onConfirm, onCancel, modoOscuro }) {
  // Si no hay un contacto seleccionado, no se muestra el modal
  if (!contacto) return null;

  return (
    // Este es el contenedor principal del modal. Se muestra con una opacidad de fondo distinta si está en modo oscuro o claro
    <div className={`modal fade show`} tabIndex="-1" style={{ display: 'block', backgroundColor: modoOscuro ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        {/* Contenido del modal. Cambia el color de fondo y el texto si el modo oscuro está activado */}
        <div className={`modal-content ${modoOscuro ? 'bg-secondary text-light' : ''}`}>
          
          {/* Encabezado del modal */}
          <div className={`modal-header ${modoOscuro ? '' : ''}`}>
            {/* Título del modal */}
            <h5 className="modal-title">Confirmar Eliminación</h5>
            
            {/* Botón para cerrar el modal sin eliminar. Llama a la función onCancel cuando se hace clic */}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onCancel}
            ></button>
          </div>

          {/* Cuerpo del modal. Muestra el mensaje con el nombre del contacto que se va a eliminar */}
          <div className="modal-body">
            <p>¿Estás seguro que deseas eliminar a <strong>{contacto.nombre}</strong>?</p>
          </div>

          {/* Pie del modal con los botones de acción */}
          <div className="modal-footer">
            {/* Botón para cancelar la eliminación. Llama a la función onCancel */}
            <button className="btn btn-secondary" onClick={onCancel}>
              Cancelar
            </button>

            {/* Botón para confirmar la eliminación. Llama a la función onConfirm */}
            <button className="btn btn-danger" onClick={onConfirm}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para poder usarlo en otras partes del proyecto
export default ModalConfirmacion;
