//Para la cantidad de articulos
const precio = document.getElementById('precio').innerHTML;

function mas(){
    document.getElementById('cantidad').value++;
    result();
}

function menos(){
    if (document.getElementById('cantidad').value >= 2){
    document.getElementById('cantidad').value--;
    result();
    }
}
function result(){
    document.getElementById('precio').innerHTML = 
    document.getElementById('cantidad').value * precio;
}

function carrito(){
    let cantidad = parseInt(document.getElementById('cantidad').value);
    const carrito = parseInt(document.getElementById('carrito').innerHTML);
    console.log(carrito);
    document.getElementById('carrito').innerHTML = cantidad + carrito;
}