

      var botonElement = document.getElementById("botonClick");
      var pElement = document.getElementById("areaContador");
      var contador = 0;
      botonElement.onclick = function () {
          contador++;
          pElement.textContent = contador;
          var balloon = document.getElementById("globo");
         balloon.style.width = "300px";
         balloon.style.height = "300px";

      }


/*document.getElementById("botonClick").onclick = function(){
    var balloon = document.getElementById("globo");
    balloon.style.width = "300px";
    balloon.style.height = "300px";
}*/