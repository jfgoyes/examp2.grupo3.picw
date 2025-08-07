// Parte 4: Herrera Juela Willian Adrian

// Componente ModalConfirmacion: muestra una ventana emergente para confirmar si el usuario quiere eliminar un contacto
function ModalConfirmacion({ contacto, onConfirm, onCancel, modoOscuro }) {
  // Si no hay un contacto seleccionado, no se muestra el modal
  if (!contacto) return null;

  return (
    // Definimos el contenedor principal del modal.
    <div className={`modal fade show`} tabIndex="-1" style={{ display: 'block', backgroundColor: modoOscuro ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        {/* Colocamos el contenido del modal. */}
        <div className={`modal-content ${modoOscuro ? 'bg-secondary text-light' : ''}`}>
          
          {/* Encabezado del modal */}
          <div className={`modal-header ${modoOscuro ? '' : ''}`}>
            {/* Título del modal */}
            <h5 className="modal-title">Confirmar Eliminación</h5>
            
            {/* Botón para cerrar el modal sin eliminar. Llamamos a la función onCancel cuando se hace click. */}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onCancel}
            ></button>
          </div>

          {/* Mostramos el mensaje de advertencia junto al nombre del contacto a eliminar */}
          <div className="modal-body">
            <p>¿Estás seguro que deseas eliminar a <strong>{contacto.nombre}</strong>?</p>
          </div>

          {/* Botones del modal establecido */}
          <div className="modal-footer">
            {/* Botón para cancelar la eliminación, aqui se usa onCancel */}
            <button className="btn btn-secondary" onClick={onCancel}>
              Cancelar
            </button>

            {/* Botón para confirmar la eliminación, usamos onConfirm */}
            <button className="btn btn-danger" onClick={onConfirm}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para poder usarlo en el app.
export default ModalConfirmacion;