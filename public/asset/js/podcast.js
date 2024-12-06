function createStarfish() {
    const starfishSVG = `
    <svg width="50" height="50" viewBox="0 0 100 100">
        <path fill="#ff9966" d="M50 5 L63 35 L95 35 L70 55 L80 85 L50 70 L20 85 L30 55 L5 35 L37 35 Z">
            <animate attributeName="fill" values="#ff9966;#ffbb99;#ff9966" dur="3s" repeatCount="indefinite"/>
        </path>
    </svg>`;
    const starfish = document.createElement('div');
    starfish.className = 'starfish';
    starfish.innerHTML = starfishSVG;
    starfish.style.left = `${Math.random() * 90}%`;
    starfish.style.top = `${Math.random() * 90}%`;
    starfish.style.transform = `rotate(${Math.random() * 360}deg)`;
    starfish.style.animationDelay = `${Math.random() * 5}s`;
    return starfish;
}

function createWaterElements() {
    const ocean = document.getElementById('ocean');
    const numberOfDrops = 30;
    const numberOfStarfish = 8;

    ocean.innerHTML = '';

    // ajt etoiles
    for (let i = 0; i < numberOfStarfish; i++) {
        if (i === 4) {
            const podcast = document.querySelector('.podcast-container');
            const audio = document.querySelector('.podcast-container audio');


            const star = createStarfish();
            star.style.cursor = 'pointer';
            ocean.append(star)

            // ajout de l'evenement sur l'étoile

            star.addEventListener('click', () => {
                podcast.style.display = 'flex';
                audio.play();
            })
        } else {
            ocean.appendChild(createStarfish());
        }
    } // Mettre le podcast derriere une étoile

    // Add water effects
    for (let i = 0; i < numberOfDrops; i++) {
        // Create water drop
        const drop = document.createElement('div');
        drop.className = 'water-drop';

        const size = Math.random() * 70 + 30;
        drop.style.width = `${size}px`;
        drop.style.height = `${size}px`;

        drop.style.top = `${Math.random() * 100}%`;
        drop.style.left = `${Math.random() * 100}%`;

        drop.style.animationDuration = `${Math.random() * 8 + 8}s`;
        drop.style.animationDelay = `${Math.random() * 5}s`;

        ocean.appendChild(drop);

        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.top = `${Math.random() * 100}%`;
        ripple.style.left = `${Math.random() * 100}%`;
        ripple.style.animationDelay = `${Math.random() * 4}s`;

        ocean.appendChild(ripple);
    }
}

// Create initial water elements
createWaterElements();

// Recreate water elements periodically to maintain animation
setInterval(createWaterElements, 12000);


/*chatbot*/

document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('openChat');
    const closeChatButton = document.getElementById('closeChat');
    const chatbot = document.querySelector('.chatbot');
    const chatBody = document.getElementById('chatBody');
    const userInput = document.getElementById('userInput');
    const sendMessageButton = document.getElementById('sendMessage');

    // Open the chatbot
    chatButton.addEventListener('click', () => {
        chatbot.style.display = 'flex';
        chatButton.style.display = 'none';
    });

    // Close the chatbot
    closeChatButton.addEventListener('click', () => {
        chatbot.style.display = 'none';
        chatButton.style.display = 'block';
    });

    // Handle sending messages
    sendMessageButton.addEventListener('click', handleUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserMessage();
    });

    function handleUserMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;

        // Add user's message to the chat
        addMessage(userMessage, 'user-message');

        // Generate bot response
        const botResponse = getBotResponse(userMessage);
        setTimeout(() => addMessage(botResponse, 'bot-message'), 500);

        userInput.value = '';
    }

    function addMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.className = className;
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes('bonjour')) {
            return 'Vous cherchez le podcast ?';
        } else if (lowerMessage.includes('oui')) {
            return 'Cherchez encore.';
        } else if (lowerMessage.includes('merci')) {
            return "C'est est une etoile ! ";
        } else if (lowerMessage.includes('caca')) {
            return "prout";
        } else {
            return "Je suis un chatbot classique, mes créateurs n'ont aucune connaissance sur l'ile aux singes mais ils aiment bien les étoiles";
        }
    }
});
