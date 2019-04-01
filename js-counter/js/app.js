(function(){

    // starting counter value is 0
    let counterValue = 0;

    // get the lower and add count buttons
    const buttons = document.querySelectorAll('.counterBtn');

    // get the counter value display
    const counter = document.getElementById('counter');

    // loop for reach button on the "buttons"
    buttons.forEach(function(btn){

        // add an event listener for 'click' functionality
        btn.addEventListener('click', function(event){

            // get the html tag value from the event target
            const value = event.target;

            // process for previous and next buttons
            if (value.classList.contains('prevBtn')) {
                counterValue--;
            }
            else if (value.classList.contains('nextBtn')) {
                counterValue++;
            }

            // update the counter text based on the counter value update
            counter.textContent = counterValue;

            // set color, based on current counterValue
            if (counterValue > 0) {
                counter.style.color = '#7fb800';
            }
            else if (counterValue < 0) {
                counter.style.color = '#F6511d';
            }
            else {
                counter.style.color = '#333333';
            }
        })
    })
})();