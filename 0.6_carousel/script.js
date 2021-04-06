window.addEventListener('load',()=> {
    let img_frame = document.getElementById("img_frame");
    let buttonleft = document.getElementById("btn-left");
    let buttonright = document.getElementById("btn-right");
    let imglist = ['1.jpg', '2.jpg', '3.jpg'];
    let compteur = 0;
    
    function change_img() {
        for(let i; i <= imglist.length; i++) {
            compteur ++;
            return compteur;
        }
    }

    change_img();
    if(compteur == 0) {
        img_frame.setAttribute("src", imglist[0]);
    } else if(compteur == 1) {
        img_frame.setAttribute("src", imglist[1]);
    } else {
        img_frame.setAttribute("src", imglist[2]);
    }
});