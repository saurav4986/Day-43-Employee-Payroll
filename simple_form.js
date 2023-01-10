const NAME_REGEX = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');

// UC1: Checking if the user entered valid first name
const text = document.querySelector('#text');//taking the id text from the html
const textError = document.querySelector('.text-error');//taking the class text-error from the html
text.addEventListener('input', function () {//event listener 
    if (NAME_REGEX.test(text.value)) {//checking the regex pattern
        textError.textContent = "";//if the pattern matched then will show empty string
    } else {
        textError.textContent = "NAME Is Incorrect!";//if the pattern will not matched then will show error
    }
});
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.innerHTML = salary.value;
salary.addEventListener('input', function () {
    output.innerHTML = salary.value;
});


    // function Saved(){
        
    //         alert("Data Saved");
        
    // }
      