// immediate invoked function expression

(function() {

  // pictures array of file names
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
  
  // start with counter at 0
  let counter = 0;

  // select buttons
  const buttons = document.querySelectorAll('.btn');

  // loop for each on both buttons (left and right)
  buttons.forEach(function(btn){

    // event listener for 'click' on each button
    btn.addEventListener('click', function(event){

      // get event target
      let value = event.target;

      // for the case of left button input
      if (value.classList.contains('btn-left')) {

         // decrement the counter (moving left)
         counter--;
         // circle around the counter
         if (counter < 0) {
           counter = pictures.length-1;
         }
         // update the new image
         document.querySelector('.img-container').style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      }

      // for the case of right button input
      if (value.classList.contains('btn-right')) {

        // increment the counter (moving right)
        counter++;
        // circle around the counter
        if (counter >= pictures.length) {
          counter = 0;
        }
        // update the new image
        document.querySelector('.img-container').style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
     }      
    });
  });

})();
