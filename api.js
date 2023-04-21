/*let map;

function iniciarMap() {
  var coord = {lat: 38.4977163,lng: -0.2566557};
  var map = new google.maps.Map(document.getElementById('api'),{
    zoom: 15,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  })
}*/
function validacion(){
  var contenido = document.getElementById('mensaje').value;
  var correo = document.getElementById('email').value;
  var nombre = document.getElementById('nombre').value;
  var telefono = document.getElementById('telef').value;
  var asunto = document.getElementById('asunto').value;

  var RegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var regularNombre = /^[A-Za-z]+$/;
  var numerotelefono = /^[0-9]{10}$/;

  if(nombre === "" || !regularNombre.test(nombre)){
      var nom = document.getElementById("nombre");
      nom.style.backgroundColor = '#ff110069';
      return false;
  }

  if(!RegularCorreo.test(correo)  || correo ==""){
      var correo1 = document.getElementById("email");
      correo1.style.backgroundColor = '#ff110069';
      return false;
  }

  if(!numerotelefono.test(telefono) || telefono ==""){
      var tele = document.getElementById("telef");
      tele.style.backgroundColor = '#ff110069';
      return false;
  }
  if(!regularNombre.test(asunto) || asunto ==""){
      var asun = document.getElementById("asunto");
      asun.style.backgroundColor = '#ff110069';
      return false;
  }
  if(contenido === ""){
      var contenido1 = document.getElementById("mensaje");
      contenido1.style.backgroundColor = '#ff110069';
      return false;
  }
  var form = document.frmEnv;
  form.submit();
  
}

let map = L.map('map').setView([-34.6, -58.583333],6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
/* Generador de pdf */
function generarPDF() {
  // Crear un nuevo documento jsPDF
  var doc = new jsPDF();

  // Agregar contenido al documento
  var nombre = document.getElementsByName("nombreCompleto")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var telefono = document.getElementsByName("telefono")[0].value;
  var asunto = document.getElementsByName("asunto")[0].value;
  var mensaje = document.getElementsByName("mensaje")[0].value;
  doc.text("Nombre completo: " + nombre, 10, 10);
  doc.text("Mail: " + email, 10, 20);
  doc.text("Telefono: " + telefono, 10, 30);
  doc.text("Asunto: " + asunto, 10, 40);
  doc.text("Mensaje: " + mensaje, 10, 50);

  // Descargar el archivo PDF
  doc.save("formulario.pdf");
}
