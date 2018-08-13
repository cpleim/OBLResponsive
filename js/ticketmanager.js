var selectedCartItem = sessionStorage.ProductID;

//GET
var info = JSON.parse(localStorage[selectedCartItem]);

//info[selectedCartItem].nombre