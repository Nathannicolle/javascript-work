let button_var = document.getElementById('click');
let compter = 0;
button_var.addEventListener('click', ()=> {
    compter = compter + 1;
    document.getElementById('number_click').innerHTML = compter;
});



/* 
let button_var = document.getElementById('number_click');
let compter = 0;
button_var.addEventListener('click', ()=> {
    array.forEach(window.addEventListener('click', ()=>{
        compter = compter + 1;
    }); => {
        document.getElementById('number_click') = compter;
        console.log(compter);
    });
});
*/