let precioMasaTradicional = 250;
let precioMasaZanahoria = 300;
let precioMasaCalabaza = 350;
let precioMasaPapa = 325;
let precioPuntadeAgua = 400;
let precioBarraza = 375;

function saludar() {
    let nombre = prompt('Hola! Estás en PIDDA!, Ingresa tu nombre: ');
    while (nombre === '' ) {
        nombre = prompt('Hola! Estás en PIDDA!, Ingresa tu nombre: ');
    }
    alert('Hola '+nombre+'!, Bienvenido a PIDDA!, vamos a crear la pizza a tu medida.\nPresioná aceptar para elegir tus productos');

}

function masas(){
    let eleccionMasa = Number(prompt('Que tipo de masa vas a elegir?\n1)Masa tradicional: $'+precioMasaTradicional+'\n2)Masa de calabaza: $'+precioMasaCalabaza+'\n3)Masa de zanahoria: $'+precioMasaZanahoria+'\n4)Masa de papa: $'+precioMasaPapa));

    while (eleccionMasa !== 1 && eleccionMasa !== 2 && eleccionMasa !== 3 && eleccionMasa !== 4) {
        alert('Su opcion es incorrecta, marque un numero del 1 al 4')
        eleccionMasa = Number(prompt('Que tipo de masa vas a elegir?\n1)Masa tradicional: $'+precioMasaTradicional+'\n2)Masa de calabaza: $'+precioMasaCalabaza+'\n3)Masa de zanahoria: $'+precioMasaZanahoria+'\n4)Masa de papa: $'+precioMasaPapa));
    }
    
    switch (eleccionMasa) {
        case 1:
            {
                alert('Seleccionaste "Masa Tradicional"');
                return "Masa Tradicional";
            }
        case 2:
            {
                alert('Seleccionaste "Masa de calabaza"');
                return 'Masa de calabaza';
            }
        case 3:
            {
                alert('Seleccionaste "Masa de zanahoria"');
                return 'Masa de zanahoria';
            }
        case 4:
            {
                alert('Seleccionaste "Masa de papa"');
                return 'Masa de papa';
            }
        
        }

}

function quesos() {
    
    let eleccionQueso = Number(prompt('Que tipo de queso vas a elegir?\n1)Queso cremoso "Punta de agua": $'+precioPuntadeAgua+'\n2)Queso muzzarella "Barraza": $'+precioBarraza));

    while (eleccionQueso !== 1 && eleccionQueso !== 2) {
        alert('Su opcion es incorrecta, marque un numero del 1 al 2')
        eleccionQueso = Number(prompt('Que tipo de queso vas a elegir?\n1)Queso cremoso "Punta de agua": $'+precioPuntadeAgua+'\n2)Queso muzzarella "Barraza": $'+precioBarraza));
    }
    
    switch (eleccionQueso) {
        case 1:
            {
                alert('Seleccionaste "Queso cremoso "Punta del agua""');
                return 'Queso Cremoso "Punta del agua"';
            }
        case 2:
            {
                alert('Seleccionaste "Queso muzzarella "Barraza""');
                return 'Queso muzzarella "Barraza"';
            }
        
        }
}

function salsaDeTomate() {
    alert('Recordá que junto con tus anteriores productos te llegará de regalo nuestra salsa de tomate cocinada por nuestros grandes cocineros');
}


function validarPrecioMasa(masaElegida){

if (masaElegida === "Masa Tradicional") {
    return precioMasaTradicional;
}else if (masaElegida === "Masa de calabaza") {
    return precioMasaCalabaza;
}else if (masaElegida === "Masa de zanahoria") {
    return precioMasaZanahoria;
}else if (masaElegida === "Masa de papa") {
    return precioMasaPapa;
}
}
function validarPrecioQueso(quesoElegido){

if (quesoElegido === 'Queso Cremoso "Punta del agua"') {
    return precioPuntadeAgua;
}else if (quesoElegido === 'Queso muzzarella "Barraza"') {
    return precioBarraza;
}
}
function resumenDePago() {
    
    let precioTotal = precioMasa+precioQueso;
    alert('Los productos que te llegarán para hacer tu pizza son:\n-'+masaElegida+': $'+precioMasa+'\n-'+quesoElegido+': $'+precioQueso+'\n-Salsa de Tomate de regalo\n\nTu precio Total a pagar es de: $'+(precioTotal));

    let pagoTotal = Number(prompt('Tu monto a pagar es de: $'+precioTotal+'\nCon cuánto vas a abonar?'));

    while (pagoTotal < precioTotal) {
        alert('El pago debe ser mayor al precio a abonar')
        pagoTotal = Number(prompt('Tu monto a pagar es de: $'+precioTotal+'\nCon cuánto vas a abonar?'));
    }

    alert('Tu vuelto es de: $'+(pagoTotal-precioTotal)+'\nMuchas Gracias por tu compra, que disfrutes tu pizza! ;)');

}


saludar();
let masaElegida = masas();
let quesoElegido = quesos();
salsaDeTomate();
let precioMasa = validarPrecioMasa(masaElegida);
let precioQueso = validarPrecioQueso(quesoElegido);
resumenDePago();