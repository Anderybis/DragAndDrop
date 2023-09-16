const moveElement = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

moveElement.addEventListener("dragstart", dragstart);
moveElement.addEventListener("dragend", dragend);

placeholders.forEach((placeholder) => {
	placeholder.addEventListener("dragover", dragover);
	placeholder.addEventListener("dragenter", dragenter);
	placeholder.addEventListener("dragleave", dragleave);
	placeholder.addEventListener("drop", drop);
});

function dragstart(event) {
	event.target.classList.add("hold");
	setTimeout(() => event.target.classList.add("hide"), 0);
}
function dragend(event) {
	event.target.classList.remove("hold", "hide");
}

function dragover(event) {
	event.preventDefault();
}

function dragenter(event) {
	event.target.classList.add("hovever");
}

function dragleave(event) {
	event.target.classList.remove("hovever");
}

function drop(event) {
	event.target.append(moveElement);
	event.target.classList.remove("hovever");
}
