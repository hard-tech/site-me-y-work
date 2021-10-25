function controle(commande) {
    // récupérer le contenu taper //
    var action = document.commande.input.value;

    // lancer animation Boutton //
    const element = document.querySelector('#boutton-start-commande');
    element.classList.add('animate__animated', 'animate__zoomIn');
    element.style.setProperty('--animate-duration', '0.5s');


    // element.addEventListener('animationend', () => {
    if (action == 'c' || action == 'C') {

        // Text programme lancer //
        document.getElementById("out-commande").innerHTML = '<br> <br> - Programme terminer !';
        
        // lancer animation Box commande //
        const element = document.querySelector('#out-commande');
        element.classList.add('animate__animated', 'animate__fadeInDown');
        element.style.setProperty('--animate-duration', '0.5s');
        
        var prénom = prompt("Quel est ton nom ?");
        var n_note = Number (prompt("Commbien de note as tu ?"));


        if (n_note > 10){
            alert ("Désoler c\'est 10 note Max, pas plus !");
            exit;
        }

        if(n_note >= 1)
        {
            note_1 = Number (prompt('Entre ta note n°1'));
            if(note_1 < 20){}
            else
            {
                return('la note n\'est pas inférieur a 20')
            }
        }
        if(n_note >= 2)
        {
            note_2 = Number (prompt('Entre ta note n°2'));
        }
        if(n_note >= 3)
        {
            note_3 = Number (prompt('Entre ta note n°3'));
        }
        if(n_note >= 4)
        {
            note_4 = Number (prompt('Entre ta note n°4'));
        }
        if(n_note >= 5)
        {
            note_5 = Number (prompt('Entre ta note n°5'));
        }
        if(n_note >= 6)
        {
            note_6 = Number (prompt('Entre ta note n°6'));
        }
        if(n_note >= 7)
        {
            note_7 = Number (prompt('Entre ta note n°7'));
        }
        if(n_note >= 8)
        {
            note_8 = Number (prompt('Entre ta note n°8'));
        }
        if(n_note >= 9)
        {
            note_9 = Number (prompt('Entre ta note n°9'));
        }
        if(n_note == 10)
        {
            note_10 = Number (prompt('Entre ta note n°10'));
        }


            var coef = prompt("Ce sont toutes des notes coef 1 (y/n) ?");
            if (coef == "y" )
        {
            
            
            if (n_note == 10){
                var note = ((note_1 + note_2 + note_3 + note_4 + note_5 + note_6 + note_7 + note_8 + note_9 + note_10) / n_note);
            }
            if (n_note == 9) {
                var note = ((note_1 + note_2 + note_3 + note_4 + note_5 + note_6 + note_7 + note_8 + note_9) / n_note);
            }
            if (n_note == 8) {
                var note = ((note_1 + note_2 + note_3 + note_4 + note_5 + note_6 + note_7 + note_8) / n_note);
            }
            if (n_note == 7) {
                var note = ((note_1 + note_2 + note_3 + note_4 + note_5 + note_6 + note_7) / n_note);
            }
            if (n_note == 6) {
                var note = ((note_1 + note_2 + note_3 + note_4 + note_5 + note_6) / n_note);
            }
            if (n_note == 5) {
                var note = ((note_1 + note_2 + note_3 + note_4 + note_5) / n_note);    
            }
            if (n_note == 4) {
                var note = ((note_1 + note_2 + note_3 + note_4) / n_note);   
            }
            if (n_note == 3) {
                var note = ((note_1 + note_2 + note_3) / n_note);    
            }
            if (n_note == 2) {
                var note = ((note_1 + note_2) / n_note);    
            }
            if (n_note == 1) {
                var note = ((note_1) / n_note);  
            }




            if (note > 10){
                alert ("Bravo " + prénom + " tu a bien travailler tu a " + note + " de moyen !");
            } 
            else {
                alert (prénom + " tu n' a pas bien travailler tu a " + note + " de moyen !");
            } 
            if (note == 10){
                alert ("c'est très  juste ! ");
            }
        }
        // si n est répondu faire le code suit du program
        if (coef == "n" )
        {
                coef_note_1 = Number (prompt("quel est le coef de la note n°1 ?"));
                note1 = coef_note_1*note_1;
                if(n_note >= 2){
                coef_note_2 = Number (prompt('quel est le coef de la note n°2 ?'));
                note2 = coef_note_2*note_2; 
                }
                if(n_note >= 3){
                    coef_note_3 = Number (prompt('quel est le coef de la note n°3 ?'));
                    note3 = coef_note_3*note_3;
                }
                if(n_note >= 4){
                    coef_note_4 = Number (prompt('quel est le coef de la note n°4 ?'));
                    note4 = coef_note_4*note_4;
                }
                if(n_note >= 5){
                    coef_note_5 = Number (prompt('quel est le coef de la note n°5 ?'));
                    note5 = coef_note_5*note_5;
                }
                if(n_note >= 6){
                    coef_note_6 = Number (prompt('quel est le coef de la note n°6 ?'));
                    note6 = coef_note_6*note_6;
                }
                if(n_note >= 7){
                    coef_note_7 = Number (prompt('quel est le coef de la note n°7 ?'));
                    note7 = coef_note_7*note_7;
                }
                if(n_note >= 8){
                    coef_note_8 = Number (prompt('quel est le coef de la note n°8 ?'));
                    note8 = coef_note_8*note_8;
                }
                if(n_note >= 9){
                    coef_note_9 = Number (prompt('quel est le coef de la note n°9 ?'));
                    note9 = coef_note_9*note_9;
                }
                if(n_note >= 10){
                    coef_note_10 = Number (prompt('quel est le coef de la note n°10 ?'));
                    note10 = coef_note_10*note_10;
                }
                
                if(n_note == 10)
                {
                note_s = note1 + note2 + note3 + note4 + note5 + note6  + note7 + note8 + note9 + note10;
                var note = note_s / (coef_note_1 + coef_note_2 + coef_note_3 + coef_note_4 + coef_note_5  + coef_note_6 + coef_note_7 + coef_note_8 + coef_note_9 + coef_note_10);
                }
                
                if(n_note == 9)
                {
                    note_s = note1 + note2 + note3 + note4 + note5 + note6  + note7 + note8 + note9;
                var note = note_s / (coef_note_1 + coef_note_2 + coef_note_3 + coef_note_4 + coef_note_5  + coef_note_6 + coef_note_7 + coef_note_8 + coef_note_9);
                }
                if(n_note == 8)
                {
                    note_s = note1 + note2 + note3 + note4 + note5 + note6  + note7 + note8;
                    var note = note_s / (coef_note_1 + coef_note_2 + coef_note_3 + coef_note_4 + coef_note_5  + coef_note_6 + coef_note_7 + coef_note_8);
                }
                if(n_note == 7)
                {
                    note_s = note1 + note2 + note3 + note4 + note5 + note6  + note7;
                    var note = note_s / (coef_note_1 + coef_note_2 + coef_note_3 + coef_note_4 + coef_note_5  + coef_note_6 + coef_note_7);
                }
                if(n_note == 6)
                {
                    note_s = note1 + note2 + note3 + note4 + note5 + note6;
                    var note = note_s / (coef_note_1 + coef_note_2 + coef_note_3 + coef_note_4 + coef_note_5  + coef_note_6);
                }
                if(n_note == 5)
                {
                    note_s = note1 + note2 + note3 + note4 + note5;
                    var note = note_s / (coef_note_1 + coef_note_2 + coef_note_3 + coef_note_4 + coef_note_5);
                }
                if(n_note == 4)
                {
                    note_s = note1 + note2 + note3 + note4;
                    var note = note_s / (coef_note_1 + coef_note_2 + coef_note_3 + coef_note_4);
                }
                if(n_note == 3)
                {
                    note_s = note1 + note2 + note3;
                    var note = note_s / (coef_note_1 + coef_note_2 + coef_note_3);
                }
                if(n_note == 2)
                {
                    note_s = note1 + note2;
                    var note = note_s / (coef_note_1 + coef_note_2);
                }
        if (note > 10){
            alert ("Bravo " + prénom + " tu a bien travailler tu a " + note + " de moyen !");
        } 
        else {
            alert (prénom + " tu n' a pas bien travailler tu a " + note + " de moyen !");
        } 
        if (note == 10){
            alert ("c'est très  juste ! ");
        }
        }
    }

    if (action == 'h' || action == 'H') {
        // lancer animation Box commande //
        const element = document.querySelector('#out-commande');
        element.classList.add('animate__animated', 'animate__fadeInDown');
        element.style.setProperty('--animate-duration', '0.5s');

        //Récriture text //
        document.getElementById("out-commande").innerHTML = 'les différentes commandes sont : <br> <br> - (h) Pour help <br> - (c) Pour le programe CalculMoyen <br> - (p) Pour le programe poids idéal';
    
    }
    
    if (action == 'p' || action == 'P') {

        var Genre = Number(prompt("Quel est votre genre 1.Masculin 2.Féminin?"));
        while (Genre < 1 || Genre > 2) {
            alert("TAPPER EXIT POUR SORTIRE (NE RIEN METTRE)");
            var Genre = Number(prompt("Quel est votre genre 1.Masculin 2.Féminin?"));
            if (Genre == 'exit') {break}
        }
        var Taille = Number(prompt("Quel est votre taille (cm) ?"));
        while (Taille < 20 || Taille > 273) {
            alert("TAPPER EXIT POUR SORTIRE (NE RIEN METTRE)");
            var Taille = Number(prompt("Quel est votre taille (cm) ?"));
            if (Genre == 'exit') {break}
        }
        var Poids = Number(prompt("Quel est votre Poids (Kg) ?"));
        while (Poids < 3 || Poids > 400) {
            alert("TAPPER EXIT POUR SORTIRE (NE RIEN METTRE)");
            var Poids = Number(prompt("Quel est votre Poids (Kg) ?"));
            if (Genre == 'exit') {break}
        }
        var Age = Number(prompt("Quel est votre âge ?"));
        while (Age < 1 || Age > 150) {
            alert("TAPPER EXIT POUR SORTIRE (NE RIEN METTRE)");
            var Age = Number(prompt("Quel est votre âge ?"));
            if (Genre == 'exit') {break}
        }
        var Forme = Number(prompt("Vous avez une morphologie : 1.normale 2.gracile 3.large ?"));
        while (Forme < 1 || Forme > 3) {
            alert("TAPPER EXIT POUR SORTIRE (NE RIEN METTRE)");
            var Forme = Number(prompt("Vous avez une morphologie : 1.normale 2.gracile 3.large ?"));
            if (Genre == 'exit') {break}
        }
        var Poignet = Number(prompt("Quel est la circonférence de votre poignet (cm) ?"));
        while (Poignet < 1 || Poignet > 60) {
            alert("TAPPER EXIT POUR SORTIRE (NE RIEN METTRE)");
            var Poignet = Number(prompt("Quel est la circonférence de votre poignet (cm) ?"));
            if (Genre == 'exit') {break}
        }

        var LH = Taille - 100 - ((Taille -150) /4);
        var LF = Taille - 100 - ((Taille -150) /2.5);
        var C1 = (Taille - 100 + Age /10)*0.9;
        var C2 = (Taille - 100 + Age /10)*0.9*0.9;
        var C3 = (Taille - 100 + Age /10)*0.9*1.1;
        var M = (Taille -100 + (4*Poignet)) /2;
        var I = (Poids / (Taille * Taille)) * 100000;
        var IMC = Math.round(I)/10

        if (IMC < 18.5) {var IMC = IMC + ' (Insuffisance pondérale (maigreur))'}
        if (IMC > 18.5 && IMC < 25) {var IMC = IMC + ' (Corpulence normale)'}
        if (IMC > 25 && IMC < 30) {var IMC = IMC + ' (Surpoids)'}
        if (IMC > 30 && IMC < 35) {var IMC = IMC + ' (Obésité modérée)'}
        if (IMC > 35 && IMC < 40) {var IMC = IMC + ' (Obésité sévère)'}
        if (IMC >= 40) {var IMC = IMC + ' (Obésité morbide ou massive)'}

        if (Genre == 1) {document.querySelector(".var-poids-L").innerHTML = LH + ' Kg';}if (Genre == null){document.querySelector(".var-poids-L").innerHTML = 'DONNÉE MANQUANTE';}
        if (Genre == 2) {document.querySelector(".var-poids-L").innerHTML = LF + ' Kg';}if (Genre == null){document.querySelector(".var-poids-L").innerHTML = 'DONNÉE MANQUANTE';}

        if (Forme == 1) {document.querySelector(".var-poids-C").innerHTML = C1 + ' Kg';}if (Forme == null){document.querySelector(".var-poids-C").innerHTML = 'DONNÉE MANQUANTE';}
        if (Forme == 2) {document.querySelector(".var-poids-C").innerHTML = C2 + ' Kg';}if (Forme == null){document.querySelector(".var-poids-C").innerHTML = 'DONNÉE MANQUANTE';}
        if (Forme == 3) {document.querySelector(".var-poids-C").innerHTML = C3 + ' Kg';}if (Forme == null){document.querySelector(".var-poids-C").innerHTML = 'DONNÉE MANQUANTE';}

        if (Poignet !== 0) {document.querySelector(".var-poids-M").innerHTML = M + ' Kg';}if (Poignet == null){document.querySelector(".var-poids-M").innerHTML = 'DONNÉE MANQUANTE';}

        if (Poids !== 0) {document.querySelector(".var-poids-I").innerHTML = IMC ;}if (Poids == null){document.querySelector(".var-poids-I").innerHTML = 'DONNÉE MANQUANTE';}
    }

}