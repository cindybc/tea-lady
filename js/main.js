
//Mostrar datos ingresados por el usuario.
function mostrarData(){
  name=  document.getElementById("nom").value;
  surname= document.getElementById("ape").value;
  email=  document.getElementById("mail").value;
  address=  document.getElementById("direc").value;
  phoneNumber= document.getElementById("fono").value;
  select= document.getElementById("opciones");
  select2= select.options[select.selectedIndex].text;
  

  if(name == null || name.length < 2 || surname == null || surname.length < 2){
    alert("Debe ingresar su nombre");
  }
  if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))){
    alert("Ingrese un email valido");
  }
  if(address == null || address < 5){
    alert("Ingrese una dirección valida");
  }
  if(!(/^\d{9}$/.test(phoneNumber))){
    alert("Ingrese un numero telefonico valido");
  }
  if(select == ""){
    alert("Escoja una opción")
  }
  if(!document.getElementById("aceptar").checked){
    alert("Acepte las condiciones")
  }else {
    document.getElementById("clientes").innerHTML="<b>Nombre :</b> " + name + "<br>" + "<b>Apellido :</b> "+ surname + "<br>"
     +"<b>Email :</b> "+ email + "<br>" +"<b>Dirección :</b> "+ address + "<br>" + "<b>Teléfono :</b> "+ phoneNumber + "<br>" + "<b>Opción Seleccionada :</b> " + select2;
  }

};
