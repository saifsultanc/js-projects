(function(){

    // select options
    const services = [
        {
            value: 1,
            title:'great - 20%'
        },
        {
            value: 2,
            title:'ok - 10%'
        },
        {
            value: 3,
            title: 'bad - 2%'
        }
    ]

    // add select options to the select statement
    services.forEach(function(service){

        // apply the values
        const option = document.createElement('option');
        option.textContent = service.title;
        option.value = service.value;

        // append them on the list
        document.getElementById('input-service').appendChild(option);
    });

    // get all the values
    const form = document.getElementById('tip-form');
    const amount = document.getElementById('input-bill');
    const users = document.getElementById('input-users');
    const service = document.getElementById('input-service');

    // customer feedback
    const feedback = document.querySelector('.feedback');
    const loader = document.querySelector('.loader');
    const results = document.querySelector('.results');

    // submit form
    form.addEventListener('submit', function(event){
        // prevent default action of calculate button
        event.preventDefault();

        // get the 3 user input values from the form
        let bill = amount.value;
        let people = users.value;
        let quality = service.value;

        // print error message if any issue in input value(s)
        if (bill === '' || bill <= '0'|| people === '' || people === '0' || quality === '0') {
            feedback.classList.add('showItem', 'alert-danger');
            feedback.innerHTML = `
                <p>please check the values</p>
                <p>bill amount cannot be less than zero</p>
                <p>people sharing the bill cannot be less than zero</p>
                <p>services has to be selected</p>
                `;
            // clear out the error message after 5 seconds
            setTimeout(function(){
                feedback.classList.remove('showItem', 'alert-danger');
            },5000);
        }
        // if all input is good, calculate and print result
        else {
            feedback.classList.add('showItem', 'alert-success');    
            feedback.innerHTML = `<p>calculating...</p`;
            loader.classList.add('showItem');
            setTimeout(function(){
                loader.classList.remove('showItem');
                feedback.classList.remove('showItem', 'alert-success');
                results.classList.add('showItem');
                showResults(bill, people, quality);
                clearForm();
            },2000);

            // after a total of 4seconds, refresh the page completely to have the result displayed erased
            setTimeout(function(){
                results.classList.remove('showItem');
            },4000);
        }
    });

    // function which displays the formatted result on html
    function showResults(bill, people, quality){
        // get the percent amount for the tip calculation
         let percent = 0;
         if (quality === '1') {
             percent = 0.2;
         }
         else if (quality === '2') {
             percent = 0.1;
         }
         else if (quality === '3') {
             percent = 0.02;
         }

         // calculate and print result
         let tipAmount =parseInt(bill) * percent;
         let total = parseInt(bill) + tipAmount;
         let person = total / parseInt(people);

         document.getElementById('tip-amount').textContent = tipAmount;
         document.getElementById('total-amount').textContent = total;
         document.getElementById('person-amount').textContent = person.toFixed(2);
    }

    // function which resets the form
    function clearForm(){
        amount.value = '';
        users.value = '';
        service.value = '';
    }
})();