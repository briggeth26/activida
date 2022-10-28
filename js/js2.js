let apps = ['Windows 10','vscode','oracle'];

let computadora ={
    "marca": "Hp",
    "discoDuro": "1tb",
    "precio": 12000,
    "softwareInstalado": apps
}

let alumnos =["mario", "luis"];
console.log(alumnos);
console.log("Total elementos", alumnos, length);
console.log("Primer elemento",alumnos[0]);
console.log("Ultimo elemento", alumnos[alumnos.length-1]);
console.log("Tipo de alumno",typeof alumnos);

let grupo51 ={
    "nombre": "Grupo 51",
    "semestre": 5,
    "carrera": "LTI"
};

console.log("Nombre:",
grupo51["nombre"],
grupo51.nombre);

console.log("Primer alumno",
grupo51,alumnos[0]);

document.write("<marquee>HOLA SOY BRIGGETH GAYTAN DISEÑANDO ESTA PAGINA</marquee>");
document.write('<ul><li>BELEN ROBLEDO</li></ul>');
document.write('<ul><li>LISSETH ROBLEDO</li></ul>');
document.write('<ul><li>LILIANA ROBLEDO</li></ul>');
document.write('<ul><li>LETICIA GALLARDO</li></ul>');

let calif = 95;

if(calif >=95 && calif <=100){
    console.log("Excelente");
} else {
    console.log("No excelente")
}