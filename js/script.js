// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  // Filtrar y ordenar el array
  const stringElements = array.filter((element) => typeof element === "string");
  const sortedStrings = stringElements.sort();

  // Mostrar los elementos filtrados y ordenados
  sortedStrings.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Mostrar los elementos filtrados y ordenados
  showList(strangeArray);
});
//En este código, hemos agregado el proceso de filtrar los elementos de tipo String del array strangeArray y luego ordenarlos alfabéticamente antes de mostrarlos en la página web utilizando la función showList. El resultado final será una lista de elementos de tipo String en orden alfabético.





