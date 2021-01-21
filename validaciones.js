$(document).ready(function(){

    $("#txtfechagen").datepicker();
    $("#txtfechapago").datepicker();

    $("#btnvalidar").click(function(){

        $("#frmcrearid").validate({
            rules:{
                txtidfact: {
                    required: true,
                    digits: true,
                    max: 9999,
                    min: 1
                },
                txtidventa: {
                    required: true,
                    digits: true,
                    max: 999,
                    min: 1
                },
                txtfechagen:{
                    required: true
                },
                txtfechapago:{
                    required: true
                },
                txtsubtotal:{
                    required: true,
                    min: 1,
                    digits: true
                },
                txtimpuesto:{
                    required: true,
                    min: 1,
                    digits: true
                },
                txttotal:{
                    required: true,
                    min: 1,
                    digits: true
                }
            },
            messages:{
                txtidfact: {
                    required: "El ID Factura debe estar lleno",
                    digits:"El campo debe ser numerico"
                },
                txtidventa: {
                    required: "El ID venta debe estar lleno",
                    digits:"El campo debe ser numerico"
                },
                txtfechagen: {
                    required: "La fecha de generacion de la factura debe estar completa"
                },
                txtfechapago: {
                    required: "La fecha de pago debe estar ingresada"
                },
                txtsubtotal: {
                    required: "El subtotal debe estar lleno",
                    digits:"El campo debe ser numerico",
                    min:"La cantidad ingresada debe ser mayor a 0"
                },
                txtimpuesto: {
                    required: "El impuesto debe estar lleno",
                    digits:"El campo debe ser numerico",
                    min:"La cantidad ingresada debe ser mayor a 0"
                },
                txttotal: {
                    required: "El total debe estar lleno",
                    digits:"El campo debe ser numerico",
                    min:"La cantidad ingresada debe ser mayor a 0"
                }

            }
        });

    });

});