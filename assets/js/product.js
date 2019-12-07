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

