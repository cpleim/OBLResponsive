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
            }

        }
    });
});

function ValidarRUT(rut) {
    if (rut.length != 12) {
        console.log("RUT Invalido.");
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
        console.log("RUT Valido, continuando...");
        return true;
    }
console.log("RUT Invalido.");
    return false;
}

var rutCI;

function ProbarCon() {
    rutCI = document.getElementById("rut-ci").value;
    if (rutCI.length == 8) {
      console.log("Parece que lo ingresado es una CI. Continuando...");
        ValidarCI(rutCI);
    } else if (rutCI.length == 12) {
      console.log("Parece que lo ingresado es un RUT. Continuando...");
        ValidarRUT(rutCI);
    }
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

        console.log(_suma);
        //Retorno valor del digito verificador
        if (_suma % 10 === 0) {
            _guion = 0
        } else {
            _guion = 10 - _suma % 10;
        }


        //Si  el digito verificador es igual al ultimo numero la CI es valida
        if (_numero[7] == _guion) {
            console.log("CI Valida, continuando...");
            return true;
        } else {
          console.log("CI Invalida.");
            return false;
        }
    } else {
      console.log("CI Invalida.");
        return false;
    }
}