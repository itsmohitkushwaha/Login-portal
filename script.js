document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Form submitted successfully!'); // Show alert message
    window.location.href = this.action; // Navigate to the success page
});
