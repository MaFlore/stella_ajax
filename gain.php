<?php

header("Content-Type: text/plain; charset=utf-8");
header("Cache-Control: no-cache . private");
header("Pragma: no-cache");

$db = new PDO('mysql:host=localhost; dbname=machine_a_sous;','root','');


sleep(2);

$niveau = $_REQUEST['niveau'];
$nom = $_REQUEST['nom'];
$mise = $_REQUEST['mise'];
$gain = $_REQUEST['compte'];


if(isset($_REQUEST['niveau'])) 
{ 

    if($niveau == 'facile'){
        $niveau = 'facile';
        $aleatoire = rand(0,100);

        if($aleatoire < 50){
            $gain = $gain - $mise;
        } else if ($aleatoire >= 50 &&  $aleatoire < 75) {

            $gain = $gain + $mise * 0.5;

        } else {

            $gain = $gain + $mise;

        }

    }
    else if($niveau == 'moyen'){
        $niveau = 'moyen';
        $aleatoire = rand(0,500);

        if ($aleatoire < 250) {

            $gain = $gain - $mise;

        } else if ($aleatoire >= 250 && $aleatoire < 375) {

            $gain = $gain + $mise * 0.25;

        } else {

            $gain = $gain + $mise;
        }

    }
    
    else {
        $niveau = 'difficile';
        $aleatoire = rand(0,1000);

        if ($aleatoire < 500) {

            $gain = $gain - $mise;

        } else if ($aleatoire >= 500 && $aleatoire < 750) {

            $gain = $gain + $mise * 0.75;        

        } else {
            $gain = $gain + $mise;
        }


    }
}
else
{
    $niveau = "niveau inconnu";
}
$resultat = $niveau.':'.$gain;
echo $resultat;

$joueur = $connection->prepare('INSERT INTO tentative(nom_du_joueur,niveau_du_joueur,mise_du_joueur,numero_tire,gain,date_du_jeu) VALUES(:nom_du_joueur,:niveau_du_joueur,:mise_du_joueur,:numero_tire,:gain,:date_du_jeu)');
$joueur = $connection->execute(array(
    'nom_du_joueur'=>$nom,
    'niveau_du_joueur'=>$niveau,
    'mise_du_joueur'=>$mise,
    'numero_tire'=>$aleatoire,
    'gain'=>$gain,
    'date_du_jeu'=>date("Y-m-H:is"),

    ))

?>