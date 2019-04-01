const ERROR_MESSAGE = 'Please enter correct expression!';

(function(){

    // select elements
    const btns = document.querySelectorAll('.btn');
    const screen = document.querySelector('.screen');
    const equalBtn = document.querySelector('.btn-equal');
    const clearBtn = document.querySelector('.btn-clear');

    // initial calculator state (Result 0)
    screen.value = '0';

    // loop over all the buttons
    btns.forEach(function(btn){
        // add click event listener for the buttons
        btn.addEventListener('click', function(){

            // get the data number value from this button click
            let number = btn.getAttribute('data-num');

            // if screen already has 0 and user input is 0
            if (screen.value === '0' && number === '0') {
                // ignore the user input
            }
            else if (screen.value === '0' || screen.value === ERROR_MESSAGE) {
                // for 0 and invalid result, clear & begin a new number
                screen.value = number;
            }
            else {
                // append this value to screen
                screen.value += number;
            }
        });
    });

    // equal button click event for evaluation
    equalBtn.addEventListener('click', function(){
        // for empty screen, nothing to evaluate, print error
        if (screen.value === ''){
            // error message
            screen.value = ERROR_MESSAGE;
        }

        // for non empty screen, evaluate & print result
        else {
            try {
                // evaluate
                let value = eval(screen.value);
                // print value
                screen.value = value;
            } catch (e) {
                // display error message
                screen.value = ERROR_MESSAGE;
            }
        }
    });

    // clear button click event to clear out the screen
    clearBtn.addEventListener('click', function(){
        screen.value = "0";
    });
})();