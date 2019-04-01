// declare the required array of colors
const colors = ['yellow', 'green', 'blue', '#f15025', 'rgba(125,125,125,0.5)']

// get the btn (button) element
const btn = document.getElementById('btn');

// add event listener for button click
btn.addEventListener('click', function() {

    // get a random number between 0 and array length
    let random = Math.floor(Math.random() * colors.length);

    // get the body of the html document
    const body = document.body;

    // update the color of the background
    body.style.backgroundColor = colors[random];
})