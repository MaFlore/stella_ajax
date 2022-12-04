function commencer(){
    var niveau = document.querySelector('input[name=niveau]:checked').value;
    console.log(niveau);
    var mise = document.getElementById("mise").value;
    console.log(mise);
    var compteActuel = parseFloat(document.getElementById("compte").textcontent);
    if (mise == "") {
        alert("Veuillez entrez une mise s'il vous plait!!!");
    } else if (mise > compteActuel) {
        alert("Le montant saisie depasse le solde de votre porte-feuille, veuillez entrez une valeur approprié")
    }else {
        

        var parametres = "niveau=" + niveau + '&nom=' +nom + '&mise=' +mise ;

        objetXHR = fonction_XHR();

        objetXHR.open('post', 'gain.php', true);

        objetXHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        objetXHR.onreadystatechange = controle;

        document.getElementById('button').disabled = true;
        document.getElementById('charge').style.visibility = "visible";
        document.getElementById('formulaire').style.visibility = "hidden";
        document.getElementById('compte').style.visibility = "hidden";


        objetXHR.send(parametres);

    }

}

