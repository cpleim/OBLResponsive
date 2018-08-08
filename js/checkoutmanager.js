//jQuery Validator custom rules
jQuery.validator.addMethod("RangeCiRUT", function(value, element) {
  return ProbarCon();
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
        required: true
      },
      rutoci: {
        required: true,
        RangeCiRUT: true
      }

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
        required: "La fecha de nacimiento es requerida"
      },
      rutoci: {
        required: "El RUT o la CI es requerida",
        RangeCiRUT: "Documento no valido"
      }

    },
    errorPlacement: function(error, element) {
      error.insertAfter(element.parent());
      $('label.error').addClass('col-12 p-0');
    }

  });
});

function ProbarCon() {
  var result = false;
  var rutCI = document.getElementById("rut-ci").value;
  var SelectRutCi = document.getElementById("SelectRutCi").selectedIndex;
  if (SelectRutCi == 0) {
    console.log("Parece que lo ingresado es una CI. Continuando...");
    result = ValidarCI(rutCI);
  } else if (SelectRutCi == 1) {
    console.log("Parece que lo ingresado es un RUT. Continuando...");
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

function checkCreditCard() {
  /**
   * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
   * @author ShirtlessKirk. Copyright (c) 2012.
   * @license WTFPL (http://www.wtfpl.net/txt/copying)
   */
  var luhnChk = (function(arr) {
    return function(ccNum) {
      var
        len = ccNum.length,
        bit = 1,
        sum = 0,
        val;

      while (len) {
        val = parseInt(ccNum.charAt(--len), 10);
        sum += (bit ^= 1) ? arr[val] : val;
      }

      return sum && sum % 10 === 0;
    };
  }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));
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

});