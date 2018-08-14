//GET
selectedCartItem = sessionStorage.ProductID;
var cart = JSON.parse(localStorage[selectedCartItem]);
//Fin GET

var clave = sessionStorage.ProductID;


$(document).ready(function() {
  $('#btnInfoProducto').click(function() {
    var image = cart.imgLocation;
    $("#imgProductInfo").attr("src", image);
    $('#productName').text(cart.nombre + " - " + cart.precio);
    $('#anio').text(cart.anio);
    $('#pantalla').text(cart.pantalla);
    $('#procesador').text(cart.procesador);
    $('#procesadorChar').text(cart.procesadorChar);
    $('#memoria').text(cart.memoria);
    $('#disco').text(cart.disco);
    $('#graficos').text(cart.graficos);
    $('#net').text(cart.net);
    $('#puertos').text(cart.puertos);
  });

});

//jQuery Validator custom rules
//Validacion RUT - CI
jQuery.validator.addMethod("RangeCiRUT", function(value, element) {
  return ProbarCon();
});

//Validacion formato de fecha
jQuery.validator.addMethod("FormatoDate", function(value, element) {
  return checkFormato();
});

//Validacion edad
jQuery.validator.addMethod("CheckEdad", function(value, element) {
  return isMayor();
});

//Validacion creditcard
jQuery.validator.addMethod("CheckTarjeta", function(value, element) {
  return checkCard();
});


//Rules jQuery Validator
$(function() {
  $("form[name='FormCheckout']").validate({
    rules: {
      mail: {
        required: true,
        email: true
      },
      nombre: {
        required: true
      },
      apellido: {
        required: true
      },
      tel: {
        required: true
      },
      fechanac: {
        required: true,
        FormatoDate: true,
        CheckEdad: true
      },
      rutoci: {
        required: true,
        RangeCiRUT: true
      },
      ccardNumero: {
        required: true,
        CheckTarjeta: true
      },
      calle: {
        required: true
      },
      esquina: {
        required: true
      },
      numeropuerta: {
        required: true
      },
      ccardNombre: {
        required: true
      },
      ccardExpiracion: {
        required: true
      },
      ccardSecCode: {
        required: true
      },

    },
    messages: {
      mail: {
        required: "El email es requerido",
        email: "El email no es valido"
      },
      nombre: {
        required: "El nombre es requerido"
      },

      apellido: {
        required: "El apellido es requerido"
      },
      tel: {
        required: "El telefono es requerido"
      },
      fechanac: {
        required: "La fecha de nacimiento es requerida",
        FormatoDate: "Formato de fecha invalido.",
        CheckEdad: "Debes ser mayor de 18 para poder realizar la compra"
      },
      rutoci: {
        required: "El RUT o la CI es requerida",
        RangeCiRUT: "Documento no valido"
      },
      ccardNumero: {
        required: "El numero de tarjeta es requerido",
        CheckTarjeta: "Tarjeta invalida"
      },
      calle: {
        required: "Este campo es requerido",
      },
      esquina: {
        required: "Este campo es requerido",
      },
      numeropuerta: {
        required: "Este campo es requerido",
      },
      ccardNombre: {
        required: "El nombre de propietario es requerido",
      },
      ccardExpiracion: {
        required: "Este campo es requerido",
      },
      ccardSecCode: {
        required: "Este campo es requerido",
      },

    },
    errorPlacement: function(error, element) {
      error.insertAfter(element.parent());
      $('label.error').addClass('col-12 p-0');
    }

  });
});

function checkFormato() {
  var result = false
  var fechaBirth = document.getElementById("datepicker").value;
  var verif = moment(fechaBirth, 'DD/MM/YYYY', true).isValid();
  if (verif == false) {
    return false;
  } else {
    return true;
  }
}

function checkEdad() {
  var esMayor = false;
  var anioActual = new Date().getFullYear();
  var mesActual = new Date().getMonth() + 1;
  var diaActual = new Date().getDate();
  var fechaBirth = document.getElementById("datepicker").value;
  var verif = moment(fechaBirth, 'DD/MM/YYYY', true).isValid();
  var fechaSplit = fechaBirth.split('/');
  var edad = anioActual - fechaSplit[2];

  /*
   *fechaSplit[0] -> Dia de nacimiento
   *fechaSplit[1] -> Mes de nacimiento
   *fechaSplit[2] -> Año de nacimiento
   */

  if (mesActual < fechaSplit[1]) {
    edad = edad - 1;
    if (edad >= 18) {
      esMayor = true;
      console.log(esMayor + ", edad: " + edad);
      return true;
    }
  }

  if (mesActual > fechaSplit[1]) {
    if (edad >= 18) {
      esMayor = true;
      console.log(esMayor + ", edad: " + edad);
      return true;
    } else {
      edad = edad;
      esMayor = false;
      console.log(esMayor + ", edad: " + edad);
      return false;
    }
  }

  if (mesActual = fechaSplit[1]) {
    if (diaActual < fechaSplit[0]) {
      if (edad >= 18) {
        esMayor = true;
      } else {
        edad = edad - 1;
        esMayor = false;
        console.log(esMayor + ", edad: " + edad);
        return false;
      }
    }
    if (diaActual > fechaSplit[0]) {
      if (edad >= 18) {
        esMayor = true;
      } else {
        esMayor = false;
        console.log(esMayor + ", edad: " + edad);
        return false;
      }

    }
    if (diaActual = fechaSplit[0]) {
      if (edad > 18) {
        esMayor = true;
        return true;
      }
      if (edad < 18) {
        esMayor = false;
        console.log(esMayor + ", edad: " + edad);
        return false;
      }
      if (esMayor == false) {
        console.log(esMayor + ", edad: " + edad + ". Nació el " + fechaBirth + ", cumple el " + diaActual + "/" + mesActual + "/" + anioActual + ". Prorroga: dia cumpleaños + 1.");
        document.getElementById("msgSys").innerText = "Por cuestiones de seguridad, nuestro sistema solicita que haya pasado al menos un dia luego de que hayas cumplido la mayoría de edad.\nPorfavor vuelve a intentar tu compra el día de mañana."
        document.getElementById("alertMsg").style.display = "block";
        return false;
      }
    }
  }
}

function isMayor() {
  var yaMayor = false;
  yaMayor = checkEdad();
  return yaMayor;
}

function checkCard() {
  var isVeridic = false;
  var cardNumero = document.getElementById("cardNumero").value;
  isVeridic = luhn_validate(cardNumero);
  return isVeridic;
}


function ProbarCon() {
  var result = false;
  var rutCI = document.getElementById("rut-ci").value;
  var SelectRutCi = document.getElementById("SelectRutCi").selectedIndex;
  if (SelectRutCi == 0) {
    result = ValidarCI(rutCI);
  } else if (SelectRutCi == 1) {
    result = ValidarRUT(rutCI);
  }
  return result;
}


function ValidarRUT(rut) {
  if (rut.length != 12) {
    console.log("[ERR] RUT Invalido.");
    return false;
  }
  if (!/^([0-9])*$/.test(rut)) {
    return false;
  }
  var dig_ori = rut.substr(11, 1);
  var rut = rut.substr(0, 11);
  var suma = 0;
  var factor = 2;

  for (i = 10; i >= 0; i--) {
    suma += (factor * rut.substr(i, 1));
    factor = (factor == 9) ? 2 : ++factor;
  }
  //(suma % 11) me da el "resto" de hacer suma / 11
  var dig_calc = 11 - (suma % 11);

  //Si es 11 el digito es 0
  if (dig_calc == 11) {
    dig_calc = 0;
  } else if (dig_calc == 10) {
    //Si es 10 lo descarto
    dig_calc = -1;
  }

  var primerosDigitos = parseInt(rut.substring(0, 2));
  var otrosDigitos = parseInt(rut.substring(2, 8));

  if (dig_calc == dig_ori && primerosDigitos >= 1 && primerosDigitos <= 21 && otrosDigitos >= 1 && otrosDigitos <= 999999) {
    console.log("[OK] RUT Valido, continuando...");
    return true;
  }
  console.log("[ERR] RUT Invalido.");
  return false;
}

function ValidarCI(ci) {
  if (ci.length == 8 || ci.length == 7) {
    //Vector de validacion
    var _formula = new Array(2, 9, 8, 7, 6, 3, 4);

    var _suma = 0;
    var _guion = 0;
    var _aux = 0;

    //Creo un Array vacio y lo completo con los digitos de la CI
    var _numero = new Array(0, 0, 0, 0, 0, 0, 0, 0);
    if (ci.length == 8) {
      _numero[0] = ci[0];
      _numero[1] = ci[1];
      _numero[2] = ci[2];
      _numero[3] = ci[3];
      _numero[4] = ci[4];
      _numero[5] = ci[5];
      _numero[6] = ci[6];
      _numero[7] = ci[7];
    } else if (ci.length == 7) {
      //Para cédulas menores a un millón. 
      _numero[0] = 0;
      _numero[1] = ci[0];
      _numero[2] = ci[1];
      _numero[3] = ci[2];
      _numero[4] = ci[3];
      _numero[5] = ci[4];
      _numero[6] = ci[5];
      _numero[7] = ci[6];
    }

    //Calculo la suma de las multiplicaciones
    _suma = (_numero[0] * _formula[0]) + (_numero[1] * _formula[1]) + (_numero[2] * _formula[2]) + (_numero[3] * _formula[3]) + (_numero[4] * _formula[4]) + (_numero[5] * _formula[5]) + (_numero[6] * _formula[6]);

    //console.log(_suma);
    //Retorno valor del digito verificador
    if (_suma % 10 === 0) {
      _guion = 0
    } else {
      _guion = 10 - _suma % 10;
    }

    //Si  el digito verificador es igual al ultimo numero la CI es valida
    if (_numero[7] == _guion) {
      console.log("[OK] CI Valida, continuando...");
      return true;
    } else {
      console.log("[ERR] CI Invalida.");
      return false;
    }
  } else {
    console.log("[ERR] CI Invalida.");
    return false;
  }
}


/*
 * JavaScript implementation of the Luhn algorithm, with calculation and validation functions
 * simplycalc.com/luhn-source.php
 */

/* luhn_checksum
 * Implement the Luhn algorithm to calculate the Luhn check digit.
 * Return the check digit.
 */

function luhn_checksum(code) {
  var len = code.length
  var parity = len % 2
  var sum = 0
  for (var i = len - 1; i >= 0; i--) {
    var d = parseInt(code.charAt(i))
    if (i % 2 == parity) {
      d *= 2
    }
    if (d > 9) {
      d -= 9
    }
    sum += d
  }
  return sum % 10
}

/* luhn_caclulate
 * Return a full code (including check digit), from the specified partial code (without check digit).
 */
function luhn_caclulate(partcode) {
  var checksum = luhn_checksum(partcode + "0")
  return checksum == 0 ? 0 : 10 - checksum
}

/* luhn_validate
 * Return true if specified code (with check digit) is valid.
 */
function luhn_validate(fullcode) {
  return luhn_checksum(fullcode) == 0
}

function okSubbmit() {
  var formCheck = $('form[name=FormCheckout]').valid();
  if (formCheck == true) {
    var clave = sessionStorage.ProductID
    var nomcomp = $('input[name=nombre]').val();
    var apecomp = $('input[name=apellido]').val();
    var telcomp = $('input[name=tel]').val();
    var rutocicomp = $('input[name=rutoci]').val();
    var mailcomp = $('input[name=mail]').val();
    var deptocomp = $("#depto option:selected").text();
    var callecomp = $('input[name=calle]').val();
    var esquinacomp = $('input[name=esquina]').val();
    var puertacomp = $('input[name=numeropuerta]').val();
    var ubiComp = $('input[name=ubicacion]:checked').val();
    var pagoacomp = $('input[name=ccardNombre]').val();

    cart[clave] = {
      nombre: nomcomp,
      apellido: apecomp,
      tel: telcomp,
      documento: rutocicomp,
      mail: mailcomp,
      departamento: deptocomp,
      calle: callecomp,
      esquina: esquinacomp,
      puerta: puertacomp,
      ubicacion: ubiComp,
      propCC: pagoacomp
    };

    //SET
    localStorage[clave] = JSON.stringify(cart);

    window.location = "process.html";
  }
}


//Triggers para los ToolTips  
$(document).ready(function() {

  $('input[name=tel]').tooltip({
    'trigger': 'focus',
    'title': 'Ej: 092094037'
  });

  $('input[name=rutoci]').tooltip({
    'trigger': 'focus',
    'title': 'Ej: 50098253'
  });

  $('input[name=fechanac]').tooltip({
    'trigger': 'focus',
    'title': 'Ej: 24/09/1999'
  });

  $('input[name=ccardSecCode]').tooltip({
    'trigger': 'focus',
    'title': 'El numero de 3 digitos al dorso de tu tarjeta'
  });

  $('input[name=postal]').tooltip({
    'trigger': 'focus',
    'title': 'Ej: 60000'
  });

});