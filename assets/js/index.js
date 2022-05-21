// On ve chercher nos éléments dans le DOM
let dragArea = document.querySelector("#drag_area");
let dropArea = document.querySelector("#drop_area");
let legend = document.querySelector("legend");
let shark = document.querySelector("#shark");

/*
 * Une fonction qui prend en charge ce qu'on veut déplacer
 * @param {*} event
 *
 */
const dragstart = (event) => {
  event.dataTransfer.setData(shark, event.target.id);
  //   event.dataTransfer.setData(legend, event.target.id);
};

// Ecouter les éléments déplaçables
dragArea.addEventListener("dragstart", dragstart);

const drop = (event) => {
  event.preventDefault();
  let sharkItem = event.dataTransfer.getData(shark);
  //   let legendItem = event.dataTransfer.getData(legend);
  const draggedElement = document.getElementById(sharkItem);
  //   const draggedElement2 = document.getElementById(legendItem);
  event.target.appendChild(draggedElement);
  //   event.target.appendChild(draggedElement2);
};

const dragover = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

// Ecouter la dropzone
dropArea.addEventListener("drop", drop);
dropArea.addEventListener("dragover", dragover);
