$(function() {
    let combinaison_finale = [];
    let combinaison_suggeree = [];
    let nombre_essais = 0;
    let nombre_essais_max = 12;
    let id = 0;
    $('.step').html("Joueur 1 définissez une combinaison :");
    $("#soumettre").click(function()
    {
        id ++;
        var value1_soumise = $("#color1_J2").val();
        var value2_soumise = $("#color2_J2").val();
        var value3_soumise = $("#color3_J2").val();
        var value4_soumise = $("#color4_J2").val();
        combinaison_suggeree.push(value1_soumise, value2_soumise, value3_soumise, value4_soumise);
        console.log(combinaison_suggeree);
        
        if((combinaison_suggeree[0] == combinaison_finale[0]) && (combinaison_suggeree[1] == combinaison_finale[1]) && (combinaison_suggeree[2] == combinaison_finale[2]) && (combinaison_suggeree[3] == combinaison_finale[3])) {
            alert("gg");
        } else {
            alert("nope");
            nombre_essais ++;
        }
        combinaison_suggeree.splice(0, 4);
    });

    $("#define").click(function()
    {
        var value1 = $("#color1").val();
        var value2 = $("#color2").val();
        var value3 = $("#color3").val();
        var value4 = $("#color4").val();
        combinaison_finale.push(value1, value2, value3, value4);
        console.log(combinaison_finale);
        $('.step').html("Joueur 2 suggérez une combinaison :");
        $('#entrees_joueur_2').show();
        $('#entrees_joueur_1').hide();
    });
});