let button_var = document.getElementById('click');
let compter = 0;
button_var.addEventListener('click', ()=> {
    compter = compter + 1;
    document.getElementById('number_click').innerHTML = compter;
});
