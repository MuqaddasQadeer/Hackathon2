// Get modal element
const modal = document.getElementById('modal');

// Get open modal button
const openModalBtn = document.getElementById('open-modal-btn');

// Get close button
const closeBtn = document.getElementsByClassName('close-btn')[0];

// Open modal event
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close modal event
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;

    // Log the input values (you can replace this with your own logic)
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Input 3:', input3);

    // Close the modal
    modal.style.display = 'none';

    // Optionally, clear the input fields
    document.getElementById('input-form').reset();
});