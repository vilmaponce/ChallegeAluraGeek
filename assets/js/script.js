// Función para enviar los datos del producto al servidor
async function agregarProducto(correo, categoria, precio, descripcion, imagen) {
  // Crear un objeto FormData para enviar los datos del formulario al servidor
  const formData = new FormData();
  formData.append('correo', correo);
  formData.append('categoria', categoria);
  formData.append('precio', precio);
  formData.append('descripcion', descripcion);
  formData.append('imagen', imagen);

  try {
    const response = await fetch('/productos', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Producto agregado exitosamente');
      // Redireccionar a la página de productos después de agregar exitosamente
      window.location.href = '/producto.html';
    } else {
      alert('Error al agregar el producto');
    }
  } catch (error) {
    console.error('Error al agregar el producto:', error);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const formAgregar = document.getElementById('agregarForm');

  formAgregar.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío predeterminado del formulario

    const correo = document.getElementById('correo').value;
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;

    // Obtener la imagen seleccionada por el usuario
    const imagenInput = document.getElementById('imagen');
    const imagen = imagenInput.files[0];

    // validación para asegurar de que se haya seleccionado una imagen antes de continuar.
    
    if (!imagen) {
      alert('Debes seleccionar una imagen para el producto.');
      return;
    }

    // Ahora puedes enviar los datos del producto, incluida la imagen, a través de la función agregarProducto
    agregarProducto(correo, categoria, precio, descripcion, imagen);

    // Limpia el formulario después de agregar el producto
    formAgregar.reset();
  });
});
