document.addEventListener('DOMContentLoaded', () => {
    let currentQuestion = 1;
    let score = 0;
    let scoreNeg = 0;

    const totalQuestions = 12;

    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const options = question.querySelectorAll('.option');
        const nextButton = question.querySelector('.btn-next');

        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                nextButton.style.display = 'block';
            });
        });

        nextButton.addEventListener('click', () => {
            const selectedOption = question.querySelector('.option.selected');
            if (selectedOption) {
                if (selectedOption.dataset.correct === 'true') {
                    score++;
                    ;
                }
                else{
                    scoreNeg++;
                    console.log(scoreNeg);

                }
                if(scoreNeg > 3 && scoreNeg <8 ){
                    imageJolie.style.display="none";
                    imageMedium.style.display="block";
                }
                else if(scoreNeg >7 ){
                    imageMedium.style.display="none";
                    imageMoche.style.display="block";
                }


                question.classList.remove('active');

                if (currentQuestion < totalQuestions) {
                    currentQuestion++;
                    const nextQuestion = document.querySelector(`[data-question="${currentQuestion}"]`);
                    nextQuestion.classList.add('active');
                } else {
                    document.querySelector('.results').style.display = 'block';
                    document.querySelector('.score').textContent = score;
                }
            }
        });

    });
    document.add
});




// script récupéré des filles

    //const audio = document.getElementById('oceanAmbience');
    const volumeControl = document.getElementById('volumeControl');
    const playButton = document.getElementById('play-button');
    const quizContainer = document.querySelector('.quiz-container');
    const titre = document.querySelector('#partie_tortue');
    const imageJolie= document.querySelector('#jolie');
    const imageMedium= document.querySelector('#medium');
    const imageMoche= document.querySelector('#moche')




playButton.addEventListener('click', () => {
    // Play audio


    // Show quiz
    titre.style.display = 'flex';
    quizContainer.style.display = 'block';


    // Hide play button with fade out effect
    playButton.style.opacity = '0';
    setTimeout(() => {
        playButton.style.display = 'none';
    }, 300);

    // créations bulles
    /*
     for(let i = 0; i < 20; i++) {
     setTimeout(createBubble, i * 100);*/
 });
 /*
 });
     */

    // controle volume
    /*
     volumeControl.addEventListener('input', (e) => {
     audio.volume = e.target.value / 100;
 });
     */

    //volume init
    /*
      audio.volume = volumeControl.value / 100;

      function createBubble() {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = Math.random() * window.innerWidth + 'px';
      bubble.style.width = Math.random() * 20 + 10 + 'px';
      bubble.style.height = bubble.style.width;
      document.body.appendChild(bubble);

      bubble.addEventListener('animationend', () => bubble.remove());
  }

      setInterval(createBubble, 1000);

      function selectOption(element) {
      if (!element.classList.contains('selected')) {
      element.classList.add('selected');

      gsap.to(element, {
      x: Math.random() * 5,
      y: Math.random() * 5,
      duration: 0.3,
      yoyo: true,
      repeat: 1
  });
  }
  }
     */

    /*
        document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('mouseover', () => {
            // Create 5-8 bubbles
            const numBubbles = 5 + Math.floor(Math.random() * 4);
            for (let i = 0; i < numBubbles; i++) {
                createQuizBubble(option);
            }
        });

        option.addEventListener('mouseover', () => {
        gsap.to(option, {
        scale: 1.05,
        rotation: Math.random() * 10 - 5,
        duration: 0.3,
        ease: "power1.out"
    });
    });

        option.addEventListener('mouseout', () => {
        gsap.to(option, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power1.in"
    });
    });

     */


    function createQuizBubble(option) {
    const bubble = document.createElement('div');
    bubble.className = 'quiz-option-bubble';

    // Random size between 5 and 15px
    const size = 5 + Math.random() * 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Position bubble relative to the option
    const rect = option.getBoundingClientRect();
    const startX = Math.random() * rect.width;
    const startY = Math.random() * rect.height;

    bubble.style.left = `${startX}px`;
    bubble.style.top = `${startY}px`;

    // Set random translation for animation
    const tx = (Math.random() - 0.5) * 100;
    const ty = -50 - Math.random() * 50;
    bubble.style.setProperty('--tx', `${tx}px`);
    bubble.style.setProperty('--ty', `${ty}px`);

    // Add bubble to the option and remove it after animation
    option.style.position = 'relative';
    option.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
    bubble.remove();
});
}

    const fishColors = ['#64ffda', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96f2d7', '#ffd93d'];
    const fishContainer = document.getElementById('fishContainer');
    const numFish = 50;
    const fish = [];
    const mousePosition = {x: -1000, y: -1000};
    const avoidanceRadius = 150;

    for (let i = 0; i < numFish; i++) {
    const fishElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const size = Math.random() < 0.5 ? 'small' : Math.random() < 0.8 ? 'medium' : 'large';
    fishElement.classList.add('fish', size);
    fishElement.setAttribute('viewBox', '0 0 50 30');

    // Main fish body
    const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
    body.setAttribute('fill', fishColors[Math.floor(Math.random() * fishColors.length)]);
    body.setAttribute('d', 'M45,15 C45,15 35,5 25,5 C15,5 0,15 0,15 C0,15 15,25 25,25 C35,25 45,15 45,15 Z');

    // Tail fin
    const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tail.setAttribute('class', 'fin');
    tail.setAttribute('fill', body.getAttribute('fill'));
    tail.setAttribute('d', 'M45,15 L50,5 L50,25 Z');
    tail.style.opacity = '0.8';

    // Eye
    const eye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    eye.setAttribute('cx', '35');
    eye.setAttribute('cy', '15');
    eye.setAttribute('r', '2');
    eye.setAttribute('fill', '#fff');

    const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animate.setAttribute('attributeName', 'd');
    animate.setAttribute('dur', '3s');
    animate.setAttribute('repeatCount', 'indefinite');
    animate.setAttribute('values', `M45,15 C45,15 35,5 25,5 C15,5 0,15 0,15 C0,15 15,25 25,25 C35,25 45,15 45,15 Z;
                                M45,15 C45,15 35,10 25,10 C15,10 0,15 0,15 C0,15 15,20 25,20 C35,20 45,15 45,15 Z;
                                M45,15 C45,15 35,5 25,5 C15,5 0,15 0,15 C0,15 15,25 25,25 C35,25 45,15 45,15 Z`);

    body.appendChild(animate);
    fishElement.appendChild(body);
    fishElement.appendChild(tail);
    fishElement.appendChild(eye);
    fishContainer.appendChild(fishElement);

    fish.push({
    element: fishElement,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
    defaultX: Math.random() * window.innerWidth,
    defaultY: Math.random() * window.innerHeight
});
}

    document.addEventListener('mousemove', (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
});

    function animate() {
    fish.forEach(f => {
        const dx = mousePosition.x - f.x;
        const dy = mousePosition.y - f.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

        const dxDefault = f.defaultX - f.x;
        const dyDefault = f.defaultY - f.y;

        if (distanceToMouse < avoidanceRadius) {
            f.speedX -= (dx / distanceToMouse) * 0.5;
            f.speedY -= (dy / distanceToMouse) * 0.5;
        } else {
            f.speedX += dxDefault * 0.0001;
            f.speedY += dyDefault * 0.0001;
        }

        f.x += f.speedX;
        f.y += f.speedY;

        f.speedX *= 0.99;
        f.speedY *= 0.99;

        if (f.x < 0) f.x = window.innerWidth;
        if (f.x > window.innerWidth) f.x = 0;
        if (f.y < 0) f.y = window.innerHeight;
        if (f.y > window.innerHeight) f.y = 0;

        const rotation = Math.atan2(f.speedY, f.speedX) * 180 / Math.PI;
        f.element.style.transform = `translate(${f.x}px, ${f.y}px) rotate(${rotation}deg)`;
    });

    requestAnimationFrame(animate);
}

    animate();




// Easter Egg mot tortue

const tortues = document.querySelectorAll('.turtle');
const tort = document.querySelector('#tortueEaster');




tortues.forEach((tortue)=>{
    tortue.addEventListener('click',()=>{
        tort.style.display='block';
    })
})


// ajouter un evenement sur la tortue


// Pour le cookie cauchemar


let compte = 0
playButton.addEventListener("mouseover", () => {
    if(compte!==8){
        compte++;
        const randomX = Math.floor(Math.random() * 90) + "%"; // Entre 0% et 90% (évite les bords)
        const randomY = Math.floor(Math.random() * 90) + "%";

        playButton.style.position = "absolute";
        playButton.style.left = randomX;
        playButton.style.top = randomY;
    }
    else{
        playButton.textContent="Vous êtes nuls";
    }
});




