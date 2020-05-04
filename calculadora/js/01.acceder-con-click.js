/*===========================================
Objeto con las propiedades de la calculadora    
==============================================*/
var p = {
  teclas: document.querySelectorAll("#calculadora ul li"),
  accion: null
};

/*===========================================
Objetos con los metodos de la calculadora
==============================================*/
var m = {
  inicio: function() {
    for (i = 0; i < p.teclas.length; i++) {
      p.teclas[i].addEventListener("click", m.oprimirTecla);
    }
  },
  oprimirTecla: function(tecla) {
    p.accion = tecla.target.getAttribute("class");
    console.log("p.accion", p.accion);
    m.calculadora(p.accion);
  },
  calculadora: function(accion) {
    switch (accion) {
      case "numero":
        console.log("numero");
        break;

      case "signo":
        console.log("signo");
        break;

      case "decimal":
        console.log("decimal");
        break;

      case "igual":
        console.log("igual");
        break;
    }
  }
};
m.inicio();
