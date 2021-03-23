window.addEventListener('load',()=> {
    document.querySelector('#btn-apply').addEventListener('click', ()=>{
        let elm = document.getElementById('selector').value;
        let css = document.getElementById('content_style').value;
        document.querySelector(elm).style.cssText=css;
    }
    );
});