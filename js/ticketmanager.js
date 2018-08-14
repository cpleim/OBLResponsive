var selectedCartItem = sessionStorage.ProductID;

//GET
var info = JSON.parse(localStorage[selectedCartItem]);

//info[selectedCartItem].nombre

$(document).ready(function() {
    var image = info.imgLocation;
    $('#presio').text(info.precio);
    $("#imgTicket").attr("src", image);
    $('#ticketProducto').text(info.nombre);
    $('#nombreape').text(info[selectedCartItem].nombre + " " + info[selectedCartItem].apellido);
    $('#telefono').text(info[selectedCartItem].tel);
    $('#documento').text(info[selectedCartItem].documento);
    $('#mail').text(info[selectedCartItem].mail);
    $('#departamento').text(info[selectedCartItem].departamento + " (" + info[selectedCartItem].ubicacion + ")");
    $('#calle').text(info[selectedCartItem].calle);
    $('#esquina').text(info[selectedCartItem].esquina);
    $('#puerta').text(info[selectedCartItem].puerta);
    $('#ubicacion').text(info[selectedCartItem].departamento);
    $('#titularCC').text(info[selectedCartItem].propCC);
  });

$(document).ready(function() {
  $('#btnDetalle').click(function() {
    var image = info.imgLocation;
    $("#imgProductInfo").attr("src", image);
    $('#productName').text(info.nombre + " - " + info.precio);
    $('#anio').text(info.anio);
    $('#pantalla').text(info.pantalla);
    $('#procesador').text(info.procesador);
    $('#procesadorChar').text(info.procesadorChar);
    $('#memoria').text(info.memoria);
    $('#disco').text(info.disco);
    $('#graficos').text(info.graficos);
    $('#net').text(info.net);
    $('#puertos').text(info.puertos);
  });
});