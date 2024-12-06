<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Sea Turtles</title>
    <link rel="stylesheet" href="../css/qcm.css"/>
    <base href="">
    <script src="../js/qcm.js" type="module"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
</head>
<body>


<div class="fish-container" id="fishContainer"></div>

<!-- Seaweed Decorations -->
<svg class="seaweed seaweed-left" viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25,100 Q35,75 25,50 Q15,25 25,0" stroke="#2a9d8f" stroke-width="3" fill="none"/>
    <path d="M15,100 Q25,75 15,50 Q5,25 15,0" stroke="#2a9d8f" stroke-width="2" fill="none"/>
</svg>

<svg class="seaweed seaweed-right" viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25,100 Q35,75 25,50 Q15,25 25,0" stroke="#2a9d8f" stroke-width="3" fill="none"/>
    <path d="M35,100 Q45,75 35,50 Q25,25 35,0" stroke="#2a9d8f" stroke-width="2" fill="none"/>
</svg>

<!-- Coral Decoration -->
<svg class="coral-decoration" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,100 C20,90 30,70 20,50 C10,30 30,20 40,40" stroke="#e76f51" stroke-width="3" fill="none"/>
    <path d="M50,100 C70,80 60,60 80,40 C100,20 90,40 100,60" stroke="#e76f51" stroke-width="3" fill="none"/>
    <path d="M120,100 C140,90 130,70 150,50 C170,30 160,50 180,70" stroke="#e76f51" stroke-width="3" fill="none"/>
</svg>

<div class="waves">
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path class="wave"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path class="wave"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
</div>

<div id="play-button">Jouer</div>

<div class="quiz-container">
    <div class="question active" data-question="1">
        <h3> 1) Vrai ou Faux : L’océan se réchauffe et devient de plus en plus acide ?
        </h3>
        <div class="options">
            <div class="option" data-correct="true">Vrai</div>
            <div class="option">Faux</div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>

    <div class="question" data-question="2">
        <h3>2) Quels sont les deux êtres vivants qui filtrent les particules de l’eau et favorisent la circulation des
            nutriments?
        </h3>
        <div class="options">
            <div class="option" data-correct="true">Eponges marines</div>
            <div class="option">Crevettes</div>
            <div class="option">Baleines</div>
            <div class="option">Philoplanctons</div>
            <!--<div class="option" data-correct="true">Coraux</div>-->
        </div>
        <button class="btn-next">Question suivante</button>
    </div>

    <div class="question" data-question="3">
        <h3>3) Quelle est la pompe qui peut être comparée au coeur humain ?
        </h3>
        <div class="options">
            <div class="option">Pompe hydraulique</div>
            <div class="option">Pompe à chaleur</div>
            <div class="option" data-correct="true">Pompe thermaholine</div>
            <div class="option">Pompe d'irrigation</div>
            <div class="option">Pompe géothermique</div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>
    <div class="question" data-question="4">
        <h3>4) Comment l'océan régule t-il sa température ?
        </h3>
        <div class="options">
            <div class="option" data-correct="true">en absorbant et redistribuant la chaleur solaire via les courants.
            </div>
            <div class="option">grâce aux récifs coralliens
            </div>
            <div class="option">grâce aux phytoplanctons
            </div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>
    <div class="question" data-question="5">
        <h3>5) Pourquoi le pouple est-il souvent comparé au cerveau?
        </h3>
        <div class="options">
            <div class="option"> il a une grande mémoire</div>
            <div class="option" data-correct="true"> il régule la température des océans</div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>

    <div class="question" data-question="6">
        <h3>6) Quelle partie des intestins correspond le mieux aux herbiers marins?
        </h3>
        <div class="options">
            <div class="option" data-correct="true"> Intestin grêle</div>
            <div class="option">Gros intestin</div>
            <div class="option">Estomac</div>

        </div>
        <button class="btn-next">Question suivante</button>
    </div>

    <div class="question" data-question="7">
        <h3>7) Vrai ou Faux : L’océan le plus pollué est l'océan Atlantique

        </h3>
        <div class="options">
            <div class="option"> Vrai</div>
            <div class="option" data-correct="true"> Faux</div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>

    <div class="question" data-question="8">
        <h3>8) Combien de % de récifs coralliens ont disparu ces 50 dernières années ?

        </h3>
        <div class="options">
            <div class="option" data-correct="true"> 30%</div>
            <div class="option"> 45%</div>
            <div class="option"> 70%</div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>

    <div class="question" data-question="9">
        <h3> 9) Combien d’années un sac plastique met à se dégrader ?

        </h3>
        <div class="options">
            <div class="option"> 5 ans</div>
            <div class="option"> 10 ans</div>
            <div class="option" data-correct="true"> 20 ans</div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>
    <div class="question" data-question="10">
        <h3>10) Quel pourcentage de <span class="turtle">tortues</span> marines ingèrent du plastique ?
        </h3>
        <div class="options">
            <div class="option"> 12%</div>
            <div class="option" data-correct="true"> 52%</div>
            <div class="option"> 72%</div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>
    <div class="question" data-question="11">
        <h3>11 )Quelle est la mission principale de Race For Water ?
        </h3>
        <div class="options">
            <div class="option" data-correct="true">Préserver les océans</div>
            <div class="option"> Repeupler les océans</div>
            <div class="option"> Transporter des colis</div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>
    <div class="question" data-question="12">
        <h3>12 ) Comment pouvons nous ralentir la pollution des océans:
        </h3>
        <div class="options">
            <div class="option" data-correct="true">Préserver les océans</div>
            <div class="option"> En arrêtant de faire pipi dans la mer
            </div>
        </div>
        <button class="btn-next">Voir les Résultats</button>
    </div>
    <div class="question" data-question="9">
        <h3>9) Vrai ou Faux : L’océan le plus pollué est l'océan Atlantique

        </h3>
        <div class="options">
            <div class="option"> Vrai</div>
            <div class="option" data-correct="true"> Faux</div>
        </div>
        <button class="btn-next">Question suivante</button>
    </div>

    <div class="results">
        <h2>Quiz terminé!</h2>
        <p>Votre score: <span class="score">0</span>/12</p>

    </div>
</div>


<audio id="oceanAmbience" loop>
    <source src="" type="audio/mpeg">
</audio>


<div id="partie_tortue">
    <h2>Répondez aux questions, plusieurs réponses fausses abiment la <span class="turtle"> tortue </span>!</h2>
    <div class="tortue" id="jolie"><img src="../images/belle_tortue.png" alt="tortue jolie"></div>
    <div class="tortue" id="medium"><img src="../images/tortue_mid.png" alt="tortue moyenne"></div>
    <div class="tortue" id="moche"><img src="../images/tortue_malade.png" alt="tortue qui a pris cher"></div>
</div>
<div id="tortueEaster">
    <img src="../images/tortue.png" alt="giga tortue">
</div>
</body>
</html>
