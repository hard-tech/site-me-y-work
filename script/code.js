localStorage.setItem('code', true);
var code = localStorage.getItem('code');
var save = localStorage.getItem('start');
GoodCode = "d0bbb45cf9a29dd74ef8bdee0747b198";

if (code !== save) {
    console.log("vous devez renseign le code !")
    alert("vous devez rensegner le code");
    // #1 demander le password //
    var go = prompt("Quel est le code ?");
    // #2 hash la réponse //
    var HashCode = md5(go);

    // #3 vérifier si le hash correspond au hash du résultat //
    while (HashCode !== GoodCode) {
    // #4 si non alert("Accès refusé") //
    // #6 while tant que "HashCode !== GoodCode" prompt("Quel est le code ?"); si "HashCode !== GoodCode" resultat relancer #4,#1,#2 //
      alert("Accès refusé");
    // #1 demander le password //
      var go = prompt("Quel est le code ?");
    // #2 hash la réponse //
      var HashCode = md5(go);
    }
    // #7 si il est correct  continuer le code //
    // #5 si oui alert ("Accès autoriser") //
    alert("Accès autoriser");
    localStorage.setItem('start', true);

}else{
    console.log("vous avez déja renseigné le code !");
}   

if(HashCode !== GoodCode){
  document.querySelector(".haut").innerHTML = '<style>body{display: none;}</style>';
}