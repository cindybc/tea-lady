
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
    document.getElementById("validacion").innerHTML= "* Debe ingresar su nombre";
  }
  else if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))){
    document.getElementById("validacion").innerHTML= "* Ingrese un email valido";
  }
  else if(address == null || address < 5){
    document.getElementById("validacion").innerHTML= "* Ingrese una dirección valida";
  }
  else if(!(/^\d{9}$/.test(phoneNumber))){
    document.getElementById("validacion").innerHTML= "* Ingrese un numero telefonico valido";
  }
  else if(select.value == ""){
    document.getElementById("validacion").innerHTML= "* Escoja una opción";
  }
  else if(!document.getElementById("aceptar").checked){
    document.getElementById("validacion").innerHTML= "* Acepte las condiciones";
  }else {
    document.getElementById("validacion").innerHTML="";
    document.getElementById("nom").value= "";
    document.getElementById("ape").value= "";
    document.getElementById("mail").value= "";
    document.getElementById("direc").value= "";
    document.getElementById("fono").value= "";
    document.getElementById("opciones").value= "";
    document.getElementById("clientes").innerHTML="<b>Nombre :</b> " + name + "<br>" + "<b>Apellido :</b> "+ surname + "<br>"
     +"<b>Email :</b> "+ email + "<br>" +"<b>Dirección :</b> "+ address + "<br>" + "<b>Teléfono :</b> "+ phoneNumber + "<br>" + "<b>Opción Seleccionada :</b> " + select2;
  }

};
