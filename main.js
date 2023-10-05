alert("LEE ATENTAMENTE LAS SIGUIENTES ALERTAS")
const productoStock = function(marca,modelo,precio,cantidad){
    this.marca = marca,
    this.modelo = modelo,
    this.precio = precio,
    this.cantidad = cantidad
}

let producto1Stock = new productoStock("REEBOK","BOTITA",35000,102);
let producto2Stock = new productoStock("REEBOK","NAUTICA",72000,56);
let producto3Stock = new productoStock("PUMA","AIR",42000,40);
let producto4Stock = new productoStock("PUMA","CROSS",75000,56);
let producto5Stock = new productoStock("PUMA","FERRARI",92000,13);
let producto6Stock = new productoStock("ADIDAS","BAD BUNNY",82000,56);
let producto7Stock = new productoStock("ADIDAS","FORUM",53000,98);
let producto8Stock = new productoStock("ADIDAS","CAMPUS2000",108000,31);
let producto9Stock = new productoStock("NIKE","LOW",118000,74);
let producto10Stock = new productoStock("NIKE","JORDAN",125000,27);

let arrayProductos =[producto1Stock,producto2Stock,producto3Stock,producto4Stock,producto5Stock,producto6Stock,producto7Stock,producto8Stock,producto9Stock,producto10Stock]
let arrayProductosCliente =[]

alert("Para iniciar tu carrito inicializa la funcion agregar()")

function agregar(){
let marca = prompt("Que zapatilla queres añadir a tu carrito de pedidos?. Ingresa la marca").trim().toLocaleUpperCase()
let modelo = prompt("Ingresa el modelo de las zapatillas").trim().toLocaleUpperCase()
let precio = parseFloat(prompt("Ingresa el precio de las zapatillas"))
let cantidad = parseInt(prompt("Cuantos pares de zapatillas vas a querer?"))

if(isNaN(precio) || isNaN(cantidad) || marca===""){
alert("ingresa valores validos")
return
}

let Zapatilla = new productoStock(marca,modelo,precio,cantidad);

arrayProductosCliente.push(Zapatilla)
console.table(arrayProductosCliente)
}

function filtrar(){
    let filtro = prompt("indica la marca que estas buscando y te diremos si la tenemos en stock").toUpperCase()
    let filtrado = arrayProductos.filter((x)=> x.marca.toUpperCase().includes(filtro))

    if (filtrado.length> 0){
        console.table(filtrado)
    }else{
    alert("no tenemos en stock")
    }
}

alert("Si te interesa ver que tenemos en stock -inmediato- inicializa la funcion filtrar()")

alert("Para saber el precio total de tu carrito inicializa la funcion total()")


function total(){
const mapeo = arrayProductosCliente.map((x)=> x.precio)
const total = mapeo.reduce((x,precio)=>x+precio,0)
console.log("El total de tu compra es de: " + total)

}
