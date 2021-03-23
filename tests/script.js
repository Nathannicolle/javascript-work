/*function test() {
    alert('Exec de test');
    document.getElementById('paragraphe').innerHTML='Hello world';
        var list=document.getElementsByClassName('item');
        for(let item of list) {
            item.innerHTML = 'item';
    }
}*/
// exécution
/*test();*/

function setByID(id, value) {
    document.getElementById(id).innerHTML=value;
}

// setByID('para', 'test');
function allInRed() {
    document.querySelector('#para').innerHTML ='test avec query'; // élément d'id para
    document.querySelectorAll('.items, p').forEach((elm)=> {
    elm.style.color='red';
    });
}

// gestion des events 
window.addEventListener('load', ()=>{
    document.querySelector('button').addEventListener('click', (event)=>{
        allInRed();
    });
});

/*function msg(message) {
    alert(message);
}

msg("test");

function msg2(afaire,a,b) {
    alert(afaire(a, b));
    console.log(arguments);
    console.log(arguments.length)
}


// utiliser let ou const plutôt que var (qui commence à être déprécié)
// cela donne : let i = 0;
// il est possible de déclarer une fonction comme ça :
const maFonction = function(i, j) {
    return i+j;
}

msg2(maFonction, 5, 12);
*/