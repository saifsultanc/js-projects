// immediate invoked function expression
(function(){

    // get the message form
    const form = document.getElementById('message-form');

    // add event listener for the submit button on form
    form.addEventListener('submit', function(event){

        // prevent the default behaviour of submit button (click open page refresh)
        event.preventDefault();

        // get the message box
        const messageBox = document.getElementById('message');
        // get the message from the message box
        const message = messageBox.value;

        // check for empty value
        if (message  === '') {

            // for empty value, get the feedback
            const feedback = document.querySelector('.feedback');
            
            // unhide the feedback with show property
            feedback.classList.add('show');

            // hide the feedback again after 1 second
            setTimeout(function(){
                feedback.classList.remove('show');
            }, 1000);
        }
        else {
            // change value on the message content
            const messageContent = document.querySelector('.message-content');
            messageContent.textContent = message;

            // refresh the input value to empty string
            messageBox.value = "";
        }
    })
})();