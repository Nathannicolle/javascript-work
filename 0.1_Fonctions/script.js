
    
    function somme(number1, number2) {
        sum_calc = number1 + number2;
        return sum_calc;
    }
    somme(1, 2);
    document.querySelector('#somme_result').innerHTML = sum_calc;

    function max(number1, number2) {
        if(number1 > number2) {
            superieur = number1;
            inferieur = number2;
            return superieur, inferieur;
        } else {
            superieur = number2;
            inferieur = number1;
            return superieur, inferieur;
        }
    }

    max(4, 999);
    document.querySelector('#max_result').innerHTML = superieur + " est supérieur à " + inferieur;

    function sommeV2(numbers) {
        result= 0;
        for(let i = 0; i<arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }
    sommeV2(1000, 2000, 3000);
    document.querySelector('#somme_result2').innerHTML = result;

    function maxV2() {
        let max=arguments[0] || 0;
        for(let i = 0; i<arguments.length; i++) {
            if(arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    }

    resultat = maxV2(1, 2, 3, 1000, 999);
    document.querySelector('#max_result2').innerHTML = resultat + " est le plus grand nombre de cette liste";