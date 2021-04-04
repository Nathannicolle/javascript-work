window.addEventListener('load',()=> {
    document.querySelector('#btn-apply').addEventListener('click', ()=>{
        let elm = document.getElementById('selector').value;
        let css = document.getElementById('content_style').value;
        let event = document.getElementById('list_event').value;
        let elmlist = document.querySelectorAll(elm);
        document.querySelector(elm).addEventListener(event, ()=> {
            elmlist.forEach(element => 
            {
                let selectorlist = element;
                selectorlist.style.cssText=css;
            });
        });
    });
});