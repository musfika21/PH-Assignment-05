// Color list
const colors = ["#F4F7FF", "#fa5b50", "#fa8050", "#faec50", "#b9fa50", "##9c50fa", "#5053fa", "#50cdfa", "#50fa89", "#61fa50", "#e350fa", "#fa5050"];

// Select the button and add event listener
document.getElementById("colorButton").addEventListener("click", function() {
    // Generate a random index to select a color from the colors array
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
