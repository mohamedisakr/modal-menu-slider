const toggleButton = document.querySelector("#toggle");
const closeButton = document.querySelector("#close");
const openButton = document.querySelector("#open");
const modalDiv = document.querySelector("#modal");

function handleToggleButton(event) {
  document.body.classList.toggle("show-nav");
}

function handleShowModal(event) {
  modalDiv.classList.add("show-modal");
}

function handleHideModal(event) {
  modalDiv.classList.remove("show-modal");
}

function handleOutsideModalClick(event) {
  event.target == modalDiv ? modalDiv.classList.remove("show-modal") : false;
}

// toggle button event handler
toggleButton.addEventListener("click", handleToggleButton);

// Sign in event handler to show modal (popup)
openButton.addEventListener("click", handleShowModal);

// Close button for modal (popup)
closeButton.addEventListener("click", handleHideModal);

// hide modal on outside click
window.addEventListener("click", handleOutsideModalClick);
