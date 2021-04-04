window.addEventListener('load',()=> {
    function countcarac(content) {
        let lengthtextzone = content.length;
        return lengthtextzone;
    }

    function countword(content) {
        let wordcount = 0;
        for(let i = 0; i <= content.length;  i++) {
            if(content.charAt(i) == ' ') {
                wordcount++;
            }
        }
        return wordcount + 1;
    }

    function countsentence(content) {
        let sentencecount = 0;
        for(let i = 0; i <= content.length;  i++) {
            if(content.charAt(i) == '.') {
                sentencecount++;
            }
        }
        return sentencecount;
    }

    let textzone = document.getElementById('textzone');
    textzone.addEventListener('keyup', ()=> {
        let finalnumbercarac = countcarac(textzone.value);
        document.getElementById("numbercarac").value = finalnumbercarac;

        let finalnumberword = countword(textzone.value);
        document.getElementById("numberwords").value = finalnumberword;

        let finalnumbersentence = countsentence(textzone.value);
        document.getElementById("numbersentence").value = finalnumbersentence;
    });
});