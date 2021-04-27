$( document ).ready(function() { // Si le document est correctement chargé
    let table = []; // On initialise le tableau
    function addElt(content) {
        // On ajoute avec table.push le contenu passé en 
        // paramètre de la fonction
        let tablevalues = table.push(content); 
        return tablevalues; // On retourne le contenu ajouté
    }

    $('#add').click(function() {
        $('#result_list').html('');
        addElt($('#task').val()); // On execute la fonction
        table.forEach(element => {
            let values = element;   
            $('#result_list').append('<tr><td>' + values + '</td><td><button id="modify_btn">Modifier tâche</button></td></tr>');
        });
        console.log(table); // On affiche dans la console
        // le résultat du tableau avec l'élément ajouté
    });
});