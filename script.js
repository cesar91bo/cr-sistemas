// Cierra el menú de navegación en móviles al seleccionar una sección.
document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('#mainNav');
    const instance = bootstrap.Collapse.getInstance(nav);
    if (instance) instance.hide();
  });
});
