// On ve chercher nos éléments dans le DOM
let dragArea = document.querySelector("#drag_area");
let dropArea = document.querySelector("#drop_area");
let legend = document.querySelector("legend");
let shark = document.querySelector("#shark_figure");

/**
 * La fonction dragstart est appelée lorsque l'utilisateur commence à faire glisser un élément.
 * @param event - L'objet événement est un objet W3C standard qui contient des informations sur
 * l'événement en cours.
 */
const dragstart = (event) => {
    // event.dataTransfer.setData("element", event.target.id);
    event.dataTransfer.setData("shark", shark.id);
    console.log(shark.id);

    //   event.dataTransfer.setData(legend, event.target.id);
};

// Ecouter les éléments déplaçables
dragArea.addEventListener("dragstart", dragstart);
dropArea.addEventListener("dragstart", dragstart);

/**
 * Lorsque l'utilisateur dépose l'élément déplacé, la fonction empêche l'action par défaut, obtient les
 * données de l'élément déplacé, obtient l'élément déplacé et ajoute l'élément déplacé à la cible.
 * @param event - l'objet événement
 */
const drop = (event) => {
    event.preventDefault();
    // let sharkItem = event.dataTransfer.getData("element");
    let figureShark = event.dataTransfer.getData("shark");
    //   let legendItem = event.dataTransfer.getData(legend);
    /* const draggedElement = document.getElementById(sharkItem); */
    const draggedFigure = document.getElementById(figureShark);
    //   const draggedElement2 = document.getElementById(legendItem);
    /* event.target.appendChild(draggedElement); */
    event.target.appendChild(draggedFigure);
    //   event.target.appendChild(draggedElement2);
};

/**
 * Il empêche l'action par défaut de l'événement de se produire.
 * @param event - L'objet événement.
 */
const dragover = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
};

// Ecouter la dropzone
dropArea.addEventListener("drop", drop);
dropArea.addEventListener("dragover", dragover);

// Ecouter la dragArea.

dragArea.addEventListener("drop", drop);
dragArea.addEventListener("dragover", dragover);
