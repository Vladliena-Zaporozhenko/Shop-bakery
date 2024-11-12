// Select the modal and relevant buttons
const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnOpenMobile = document.querySelector(".mobile-modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

// Define the toggle function
const toggleModal = () => modal.classList.toggle("is-hidden");

// Attach event listeners
modalBtnOpen.addEventListener("click", toggleModal);
modalBtnOpenMobile.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
