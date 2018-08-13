/*lazymarket.js
 *Script improvisado para manipular la funcionalidad de la tienda, teniendo pocos items a la venta.
 *La idea es diseñar un sistema mejorado e inteligente para poder manipular grandes cantidades de items a la vez.
 *En este caso, al ser pocos, no es necesario hacer todo un complejo sistema a parte para poder controlar la tienda.
 *Si, ya sabemos que se puede hacer mejor.
 */
var cartItem;

var articulo = [];
articulo['IMPRO25565'] = {
  itemId: 'IMPRO25565',
  imgLocation: 'assets/img/imacpro-27-retina-config-hero.jpg',
  stock: 15,
  nombre: "iMac Pro",
  anio: "Año - 2018",
  pantalla: "27-inch Retina 5K 5120-by-2880 P3 display.",
  procesador: "3.2GHz 8-core Intel Xeon W.",
  procesadorChar: "Turbo Boost hasta 4.2GHz.",
  memoria: "32GB 2666MHz ECC, expandible hata 128GB.",
  disco: "1TB SSD.",
  graficos: "Radeon Pro Vega 56 - 8GB HBM2 de memoria.",
  net: "10Gb Ethernet.",
  puertos: "4 Puertos Thunderbolt 3, USB 3, SDXC card slot."
};
articulo['MBAIR25566'] = {
  itemId: 'MBAIR25566',
  imgLocation: 'assets/img/macbookair17.jpeg',
  stock: 8,
  nombre: "MacBook Air",
  anio: "Año - 2017",
  pantalla: "Pantalla widescreen de 13.3 pulgadas, retroiluminada por LED.",
  procesador: "Intel Core i5 dual core de 1.8 GHz.",
  procesadorChar: "Turbo Boost hasta 2.9GHz.",
  memoria: "8 GB de memoria integrada LPDDR3 de 1600 MHz.",
  disco: "SSD basado en PCIe de 128 GB.",
  graficos: "Intel HD Graphics 6000.",
  net: "Conexión inalámbrica Wi-Fi 802.11ac; compatible con IEEE 802.11a/b/g/n.",
  puertos: "1 Puerto Thunderbolt 2, 2 USB-3, SDXC card slot"
};
articulo['MBPRO25567'] = {
  itemId: 'MBPRO25567',
  stock: 13,
  imgLocation: 'assets/img/macbook-pro-2016.jpg',
  nombre: "MacBook Pro - Con Touch Bar",
  anio: "Año - 2018",
  pantalla: "Pantalla Retina de 13.3 pulgadas retroiluminada por LED.",
  procesador: "Intel Core i5 de 4 núcleos y 2.3 GHz.",
  procesadorChar: "Turbo Boost de hasta 3.8 GHz.",
  memoria: "8 GB de memoria integrada LPDDR3 de 2133 MHz.",
  disco: "SSD hasta 512 GB.",
  graficos: "Intel Iris Plus Graphics 655",
  net: "Conexión inalámbrica Wi-Fi 802.11ac; compatible con IEEE 802.11a/b/g/n.",
  puertos: "4 Puertos Thunderbolt 3, 1 USB 3.1."
};

articulo['WATCHSERIES3'] = {
  itemId: 'WATCHSERIES3',
  imgLocation: 'assets/img/appleWatch.jpg',
  stock: 0,
  nombre: "Apple Watch Series 3",
  anio: "Año - 2017",
  net: "Wi‑Fi (802.11b/g/n de 2.4 GHz)",
  gps: "GPS, GLONASS, Galileo y QZSS",
  cubierta: "Cubierta posterior de material compuesto",
  pantalla: "Retina OLED de segunda generación con Force Touch",
  cardio: "Sensor de frecuencia cardiaca"
};

articulo['IPHONEX'] = {
  itemId: 'IPHONEX',
  imgLocation: 'assets/img/iPhoneX.jpg',
  stock: 0,
  nombre: "iPhone x",
  anio: "Año - 2017",
  disco: "64GB - 256GB",
  pantalla: "Pantalla OLED Multi-Touch de 5.8 pulgadas",
  procesador: "Chip A11 Bionic con arquitectura de 64 bits",
  camara: "Cámaras de 12 MP con gran angular y teleobjetivo"
};

articulo['APPLETV'] = {
  itemId: 'APPLETV',
  imgLocation: 'assets/img/appleTV.jpg',
  stock: 0,
  nombre: "Apple TV 4K",
  anio: "Año - 2017",
  disco: "32GB - 64GB",
  puertos: "HDMI 2.0a",
  net: "Wi‑Fi 802.11ac - Gigabit Ethernet",
  procesador: "Chip A10X Fusion con arquitectura de 64 bits"
};


$(document).ready(function() {

  $('#IMPRO25565').click(function() {
    cartItem = articulo["IMPRO25565"].itemId;
    $('#productName').text(articulo["IMPRO25565"].nombre);
    $('#anio').text(articulo["IMPRO25565"].anio);
    $('#pantalla').text(articulo["IMPRO25565"].pantalla);
    $('#procesador').text(articulo["IMPRO25565"].procesador);
    $('#procesadorChar').text(articulo["IMPRO25565"].procesadorChar);
    $('#memoria').text(articulo["IMPRO25565"].memoria);
    $('#disco').text(articulo["IMPRO25565"].disco);
    $('#graficos').text(articulo["IMPRO25565"].graficos);
    $('#net').text(articulo["IMPRO25565"].net);
    $('#puertos').text(articulo["IMPRO25565"].puertos);
    if (articulo["IMPRO25565"].stock == 0) {
      $('#toCheckout').prop("disabled", true);
    } else {
      $('#toCheckout').prop("disabled", false);
    }
  });

  $('#MBAIR25566').click(function() {
    cartItem = articulo["MBAIR25566"].itemId;
    $('#productName').text(articulo["MBAIR25566"].nombre);
    $('#anio').text(articulo["MBAIR25566"].anio);
    $('#pantalla').text(articulo["MBAIR25566"].pantalla);
    $('#procesador').text(articulo["MBAIR25566"].procesador);
    $('#procesadorChar').text(articulo["MBAIR25566"].procesadorChar);
    $('#memoria').text(articulo["MBAIR25566"].memoria);
    $('#disco').text(articulo["MBAIR25566"].disco);
    $('#graficos').text(articulo["MBAIR25566"].graficos);
    $('#net').text(articulo["MBAIR25566"].net);
    $('#puertos').text(articulo["MBAIR25566"].puertos);
    if (articulo["MBAIR25566"].stock == 0) {
      $('#toCheckout').prop("disabled", true);
    } else {
      $('#toCheckout').prop("disabled", false);
    }
  });

  $('#MBPRO25567').click(function() {
    cartItem = articulo["MBPRO25567"].itemId;
    $('#productName').text(articulo["MBPRO25567"].nombre);
    $('#anio').text(articulo["MBPRO25567"].anio);
    $('#pantalla').text(articulo["MBPRO25567"].pantalla);
    $('#procesador').text(articulo["MBPRO25567"].procesador);
    $('#procesadorChar').text(articulo["MBPRO25567"].procesadorChar);
    $('#memoria').text(articulo["MBPRO25567"].memoria);
    $('#disco').text(articulo["MBPRO25567"].disco);
    $('#graficos').text(articulo["MBPRO25567"].graficos);
    $('#net').text(articulo["MBPRO25567"].net);
    $('#puertos').text(articulo["MBPRO25567"].puertos);
    if (articulo["MBPRO25567"].stock == 0) {
      $('#toCheckout').prop("disabled", true);
    } else {
      $('#toCheckout').prop("disabled", false);
    }
  });

  $('#WATCHSERIES3').click(function() {
    cartItem = articulo["WATCHSERIES3"].itemId;
    $('#productName').text(articulo["WATCHSERIES3"].nombre);
    $('#anio').text(articulo["WATCHSERIES3"].anio);
    $('#pantalla').text(articulo["WATCHSERIES3"].net);
    $('#procesador').text(articulo["WATCHSERIES3"].gps);
    $('#procesadorChar').text(articulo["WATCHSERIES3"].cubierta);
    $('#memoria').text(articulo["WATCHSERIES3"].pantalla);
    $('#disco').text(articulo["WATCHSERIES3"].cardio);
    if (articulo["WATCHSERIES3"].stock == 0) {
      $('#toCheckout').prop("disabled", true);
    } else {
      $('#toCheckout').prop("disabled", false);
    }
  });

  $('#IPHONEX').click(function() {
    cartItem = articulo["IPHONEX"].itemId;
    $('#productName').text(articulo["IPHONEX"].nombre);
    $('#anio').text(articulo["IPHONEX"].anio);
    $('#pantalla').text(articulo["IPHONEX"].disco);
    $('#procesador').text(articulo["IPHONEX"].pantalla);
    $('#procesadorChar').text(articulo["IPHONEX"].procesador);
    $('#memoria').text(articulo["IPHONEX"].camara);
    if (articulo["IPHONEX"].stock == 0) {
      $('#toCheckout').prop("disabled", true);
    } else {
      $('#toCheckout').prop("disabled", false);
    }
  });

  $('#APPLETV').click(function() {
    cartItem = articulo["APPLETV"].itemId;
    $('#productName').text(articulo["APPLETV"].nombre);
    $('#anio').text(articulo["APPLETV"].anio);
    $('#pantalla').text(articulo["APPLETV"].disco);
    $('#procesador').text(articulo["APPLETV"].puertos);
    $('#procesadorChar').text(articulo["APPLETV"].net);
    $('#memoria').text(articulo["APPLETV"].procesador);
    if (articulo["APPLETV"].stock == 0) {
      $('#toCheckout').prop("disabled", true);
    } else {
      $('#toCheckout').prop("disabled", false);
    }
  });


  $('#toCheckout').click(function() {
    sessionStorage.setItem("ProductID", cartItem);
    localStorage[articulo[cartItem].itemId] = JSON.stringify(articulo[cartItem]);
    location.href = "checkout.html";
  });

});


$(document).ready(function() {

  if (articulo["IMPRO25565"].stock == 0) {
    articulo["IMPRO25565"].nombre = articulo["IMPRO25565"].nombre + " (sin stock)";
    $('#stockItem1').text("Sin stock");
    $('#icoItem1').removeClass('fa-check');
    $('#icoItem1').addClass('fa-times');
  } else {
    $('#stockItem1').text(articulo["IMPRO25565"].stock + " En stock");
    var str = articulo["IMPRO25565"].nombre;
    var n = str.search('" (sin stock")');
    if (n == -1) {
      return;
    } else {
      var nombre = articulo["IMPRO25565"].nombre;
      var nombre2 = nombre.replace(' (sin stock)', '');
      articulo["IMPRO25565"].nombre = nombre2;
    }
    $('#stockItem1').text(articulo["IMPRO25565"].stock + " En stock");
  }

});

$(document).ready(function() {

  if (articulo["MBAIR25566"].stock == 0) {
    articulo["MBAIR25566"].nombre = articulo["MBAIR25566"].nombre + " (sin stock)";
    $('#stockItem2').text("Sin stock");
    $('#icoItem2').removeClass('fa-check');
    $('#icoItem2').addClass('fa-times');
  } else {
    $('#stockItem2').text(articulo["MBAIR25566"].stock + " En stock");
    var str = articulo["MBAIR25566"].nombre;
    var n = str.search('" (sin stock")');
    if (n == -1) {
      return;
    } else {
      var nombre = articulo["MBAIR25566"].nombre;
      var nombre2 = nombre.replace(' (sin stock)', '');
      articulo["MBAIR25566"].nombre = nombre2;
    }
    $('#stockItem2').text(articulo["MBAIR25566"].stock + " En stock");
  }

});

$(document).ready(function() {

  if (articulo["MBPRO25567"].stock == 0) {
    articulo["MBPRO25567"].nombre = articulo["MBPRO25567"].nombre + " (sin stock)";
    $('#stockItem3').text("Sin stock");
    $('#icoItem3').removeClass('fa-check');
    $('#icoItem3').addClass('fa-times');
  } else {
    $('#stockItem3').text(articulo["MBPRO25567"].stock + " En stock");
    var str = articulo["MBPRO25567"].nombre;
    var n = str.search('" (sin stock")');
    if (n == -1) {
      return;
    } else {
      var nombre = articulo["MBPRO25567"].nombre;
      var nombre2 = nombre.replace(' (sin stock)', '');
      articulo["MBPRO25567"].nombre = nombre2;
    }
    $('#stockItem3').text(articulo["MBPRO25567"].stock + " En stock");
  }

});


$(document).ready(function() {

  if (articulo["WATCHSERIES3"].stock == 0) {
    articulo["WATCHSERIES3"].nombre = articulo["WATCHSERIES3"].nombre + " (sin stock)";
    $('#stockItem4').text("Sin stock");
    $('#icoItem4').removeClass('fa-check');
    $('#icoItem4').addClass('fa-times');
  } else {
    $('#stockItem4').text(articulo["WATCHSERIES3"].stock + " En stock");
    var str = articulo["WATCHSERIES3"].nombre;
    var n = str.search('" (sin stock")');
    if (n == -1) {
      return;
    } else {
      var nombre = articulo["WATCHSERIES3"].nombre;
      var nombre2 = nombre.replace(' (sin stock)', '');
      articulo["WATCHSERIES3"].nombre = nombre2;
    }
    $('#stockItem4').text(articulo["WATCHSERIES3"].stock + " En stock");
  }

});

$(document).ready(function() {

  if (articulo["IPHONEX"].stock == 0) {
    articulo["IPHONEX"].nombre = articulo["IPHONEX"].nombre + " (sin stock)";
    $('#stockItem5').text("Sin stock");
    $('#icoItem5').removeClass('fa-check');
    $('#icoItem5').addClass('fa-times');
  } else {
    $('#stockItem5').text(articulo["IPHONEX"].stock + " En stock");
    var str = articulo["IPHONEX"].nombre;
    var n = str.search('" (sin stock")');
    if (n == -1) {
      return;
    } else {
      var nombre = articulo["IPHONEX"].nombre;
      var nombre2 = nombre.replace(' (sin stock)', '');
      articulo["IPHONEX"].nombre = nombre2;
    }
    $('#stockItem5').text(articulo["IPHONEX"].stock + " En stock");
  }

});


$(document).ready(function() {

  if (articulo["APPLETV"].stock == 0) {
    articulo["APPLETV"].nombre = articulo["APPLETV"].nombre + " (sin stock)";
    $('#stockItem6').text("Sin stock");
    $('#icoItem6').removeClass('fa-check');
    $('#icoItem6').addClass('fa-times');
  } else {
    $('#stockItem6').text(articulo["APPLETV"].stock + " En stock");
    var str = articulo["APPLETV"].nombre;
    var n = str.search('" (sin stock")');
    if (n == -1) {
      return;
    } else {
      var nombre = articulo["APPLETV"].nombre;
      var nombre2 = nombre.replace(' (sin stock)', '');
      articulo["APPLETV"].nombre = nombre2;
    }
    $('#stockItem6').text(articulo["APPLETV"].stock + " En stock");
  }

});