function fonction_XHR() {
    var resultat = null;
    try {
        resultat = new XMLHttpRequest();
    } catch (error) {
        try {
            resultat = new ActiveXObject("Msxlm2.XMLHTTP");
        } catch (error) {
            try {
                resultat = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (error) {
                resultat = null;
            }
        }
    }
    return resultat;
}

function controle() {


    if (objetXHR.readyState == 4) {

        if (objetXHR.status == 200) {

            resultatServeur = objetXHR.responseText;
            var resultatClient = resultatServeur.split(':');
            var niveau = decodeURI(resultatClient[0]);
            var tirage = parseInt(decodeURI(resultatClient[1]));
            console.log(tirage);
            console.log(niveau);

            var affichage;
            var montant = document.getElementById('compte').textContent;
            console.log(montant);
            var montantCompte = parseFloat(montant);
            var mise = document.getElementById('mise').value;
            var miseT = parseFloat(mise);
            if (niveau == 'facile') {
                if (tirage < 50) {

                    montantCompte = montantCompte - miseT;
                    affichage = " Vous avez perdu " + miseT;

                } else if (tirage >= 50 && tirage < 75) {

                    montantCompte = montantCompte + miseT * 0.5;
                    affichage = " Vous avez gagné " + miseT * 0.5;

                } else {

                    montantCompte = montantCompte + miseT;
                    affichage = " Vous avez gagné " + miseT;
                }
            } else if (niveau == 'moyen') {

                if (tirage < 250) {

                    montantCompte = montantCompte - miseT;
                    tirage = " Vous avez perdu " + miseT;
                    console.log(montantCompte);

                } else if (tirage >= 250 && tirage < 375) {

                    montantCompte = montantCompte + miseT * 0.25;
                    affichage = " Vous avez gagné " + miseT * 0.25;
                    console.log(montantCompte);

                } else {

                    montantCompte = montantCompte + miseT;
                    affichage = " Vous avez gagné " + miseT;
                    console.log(montantCompte);
                }
            } else if (niveau == 'difficile') {
                if (tirage < 500) {

                    montantCompte = montantCompte - miseT;
                    affichage = "  avez perdu " + miseT;

                } else if (tirage >= 500 && tirage < 750) {

                    montantCompte = montantCompte + miseT * 0.75;
                    affichage = "  avez gagné " + miseT * 0.75;

                } else {

                    montantCompte = montantCompte + miseT;
                    affichage = " Vous avez gagné " + miseT;
                }

            }
            document.getElementById('resultat').innerHTML = affichage + "F CFA";
            document.getElementById('resultat').style.visibility = "visible";
            document.getElementById('formulaire').style.visibility = "visible";
            document.getElementById('compte').innerHTML = montantCompte;
            document.getElementById('charge').style.visibility = "hidden";
            document.getElementById('button').disabled = false;
            document.getElementById('tentative').innerHTML = (++tentative);

            if (montantCompte <= 0) {

                document.getElementById('compte').innerHTML = "Vous avez perdu";
                document.getElementById('formulaire').style.display = "none";
                // document.getElementById('button').style.visibility = "hidden";

            } else {
                document.getElementById('compte').innerHTML = montantCompte;
            }

            document.getElementById('info').style.visibility = "visible";
            document.getElementById('button').disabled = false;
            document.getElementById('charge').style.visibility = "hidden";
            document.getElementById('compte').style.visibility = "visible";

        } else {
            document.getElementById('info').innerHTML = "Erreur";
            document.getElementById('info').style.visibility = "hidden";
            document.getElementById('button').disabled = false;
            document.getElementById('charge').style.visibility = "hidden";
            document.getElementById('compte').style.visibility = "hidden";
            document.getElementById('resultat').style.visibility = "hidden";
            document.getElementById('tentative').style.visibility = "hidden";

            objetXHR.abort();
            objetXHR = null;
        }
    }


}