//Border del nav
document.querySelectorAll('.elemento').forEach(div => {
   div.addEventListener('click', function() {
     // Remueve la clase 'active' de todos los div
     document.querySelectorAll('.elemento').forEach(d => {
       d.classList.remove('active');
     });
     // Agrega la clase 'active' solo al div clickeado
     this.classList.add('active');
   });
 });

 //moverse entre secciones
document.getElementById('hola').addEventListener('click', function() {
  document.getElementById('info').scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById('acerca').addEventListener('click', function() {
  document.getElementById('acercaDe').scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById('div_proyecto').addEventListener('click', function() {
  document.getElementById('proyect').scrollIntoView({
    behavior: 'smooth'
  });
});

//Descargar archivo
document.getElementById('div_cv').addEventListener('click', function() {
  document.getElementById('descargarLink').click();
});

