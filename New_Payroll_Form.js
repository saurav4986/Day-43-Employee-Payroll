window.addEventListener('DOMContentLoaded', (Event)=>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeeData()).name = name.value;
            textError.textContent="";
        }catch (e) {
            textError.textContent = e ;
        }
    })
});