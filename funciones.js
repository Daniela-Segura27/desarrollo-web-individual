function alertaEliminar(){
    var elimina = confirm("¿Desea eliminar la venta?");
    
    if(elimina){
        alert("¡La venta se ha eliminado exitosamente!");
    }else{
        alert("¡Has denegado el mensaje!")
    }
    
}

function alertaAgregar(){
    agrega = confirm("¿Desea agregar un producto?");
    if(agrega){
        alert("¡El producto se ha agregado exitosamente!");
    }else{
        alert("¡Has denegado el mensaje!")
    }
}

