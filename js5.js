
function opera(numero1, numero2, operacion){
    let resultado = 0;
    switch(operacion){
        case "+":
          resultado = numero1 + numero2;
          break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
          resultado = numero1 * numero2;
          break;
        case "/":
          resultado = numero1 / numero2;
          break;
      } return resultado;
};

function calcular(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);

    let operacion = document.getElementById("op").value;
    
    let resultado = document.getElementById("resul");
    resultado.value = opera(numero1, numero2, operacion);
}


function Ver(img,imagen){
    switch(img){
        case 1:
          imagen.src="recursos/alan.jpg";
          break;
        case 2:
            imagen.src="recursos/2.jpg";
            break;
        case 3:
            imagen.src="recursos/3.jpg";
          break;
        case 4:
            imagen.src="recursos/4.jpg";
          break;
        case 5:
            imagen.src="recursos/5.jpg";
          break;
      }
};

function VerImagen(){
    let img = parseInt(document.getElementById("img").value);
    let imagen = document.getElementById("imagen");
    console.log(img);
    Ver(img,imagen);
}

function TablaMultiplicar(numbtab){


	document.write("<ul>");
	//i++ significa i=i+1;

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(numtab + "x " + i + "= " + numtab * i);
		document.write("</li>");
	}

	document.write("</ul>");
}
function Vertabla(){

  let numtab = parseInt(document.getElementById("numtab").value);
  TablaMultiplicar(numtab);
}