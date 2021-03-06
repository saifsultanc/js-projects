(function(){

    // check fields and hide the submit
    document.addEventListener('DOMContentLoaded', function(){
        const display = new Display();
        display.checkFields();
        display.hideSubmit();
    });

    // add customer on submit
    document.getElementById('customer-form').addEventListener('submit', function(event){
        event.preventDefault();

        const name = this.querySelector('.name');
        const course = this.querySelector('.course');
        const author = this.querySelector('.author');

        const customer = new Customer(name.value, course.value, author.value);
        const display = new Display();

        display.feedback(customer);
        display.clearFields();
    });

    // display
    function Display(){
        this.name = document.getElementById('name');
        this.course = document.getElementById('course');
        this.author = document.getElementById('author');
        this.customers = document.querySelector('.customer-list');
    }

    // check fields
    Display.prototype.checkFields = function() {
        this.name.addEventListener('blur',this.validateField);
        this.course.addEventListener('blur', this.validateField);
        this.author.addEventListener('blur', this.validateField);
    }

    // validate each field
    Display.prototype.validateField = function() {
        // empty input must be marked as fail
        if (this.value === ''){
            this.classList.remove('complete');
            this.classList.add('fail');
        }
        // non empty input must be marked as complete
        else {
            this.classList.remove('fail');
            this.classList.add('complete');
        }

        // get the number of completes
        const complete = document.querySelectorAll('.complete');
        // if all complete (3 completes found), we enable submit button
        if (complete.length === 3){
            document.querySelector('.submitBtn').disabled = false;
        }
        // for any complete missing, submit button is disabled
        else{
            document.querySelector('.submitBtn').disabled = true;
        }
    }

    // display submit button
    Display.prototype.hideSubmit = function(){
        const btn = document.querySelector('.submitBtn');
        btn.disabled = true;
    }

    // clear fields
    Display.prototype.clearFields = function(){
        this.name.value = '';
        this.course.value = '';
        this.author.value = '';

        this.name.classList.remove('fail');
        this.name.classList.remove('complete');

        this.course.classList.remove('fail');
        this.course.classList.remove('complete');  

        this.author.classList.remove('fail');
        this.author.classList.remove('complete');
    }

    // show loading and feedback
    Display.prototype.feedback = function(customer){
        const feedback = document.querySelector('.feedback');
        const loading = document.querySelector('.loading');

        feedback.classList.add('showItem', 'alert', 'alert-success');
        loading.classList.add('showItem');

        const self = this;
        self.hideSubmit();

        setTimeout(function(){
            feedback.classList.remove('showItem', 'alert', 'alert-success');
            loading.classList.remove('showItem');
            self.addCustomer(customer);
        }, 2000);
    }

    Display.prototype.addCustomer = function(customer){
        const random = this.getRandom();
        const div = document.createElement('div');
        div.classList.add('col-11', 'mx-auto', 'col-md-6', 'col-lg-4', 'my-3');
        div.innerHTML = `
                <div class="card text-left">
                    <img src="img/cust-${random}.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                    <!-- customer name -->
                    <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name"> ${customer.name}</span></h6>
                    <!-- end of customer name -->
                    <!-- customer name -->
                    <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2"> ${customer.course} :</span><span id="customer-course">
                    css basics
                    </span></h6>
                    <!-- end of customer name -->
                    <!-- customer name -->
                    <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author"> ${customer.author}</span></h6>
                    <!-- end of customer name -->
                </div>
            </div>        
        `;
        this.customers.appendChild(div);
    }

    // random number
    Display.prototype.getRandom = function(){
        let random = Math.floor(Math.random() * 5 + 1);
        return random;
    }

    // customer constructor function
    function Customer(name, course, author){
        this.name = name;
        this.course = course;
        this.author = author;
    }
})();