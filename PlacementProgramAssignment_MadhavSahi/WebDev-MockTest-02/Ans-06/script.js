const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close');

// Open the modal
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Close the modal
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);

// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
