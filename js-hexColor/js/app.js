// immediate invoked function expression
// will create local scope so does not pollute global scope

(function (){

    // get the html tag where the hex value is to be updated
    const hexValue = document.getElementById('hex-value');

    // get the button click object
    const btn = document.getElementById('btn');

    // add the event listener on click button
    btn.addEventListener('click', createHex);

    // function to create and assign the random hex color
    function createHex() {

        // hex values array 0-9 and A-F
        const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

        // hex color notation begins with #
        let hexColor = '#';

        // 6 random values from the hex color array
        for (let i=0; i<6; i++) {
            let random = Math.floor(Math.random() * hexValues.length);
            
            hexColor += hexValues[random];
        }

        // set the hex color to the background of the html
        document.body.style.backgroundColor = hexColor;

        // write the hex color to the html text tag
        hexValue.textContent = hexColor;
    }
})();