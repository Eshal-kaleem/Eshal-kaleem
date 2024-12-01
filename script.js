var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('Skills');

// Add event listener for click
toggleButton.addEventListener('click', function() {
    // Check if the skills section is currently displayed or not
    if (skills.style.display === 'none' || skills.style.display === '') {
        // If it's hidden, show it
        skills.style.display = 'block';
    } else {
        // If it's visible, hide it
        skills.style.display = 'none';
    }
});