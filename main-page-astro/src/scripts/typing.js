document.addEventListener("DOMContentLoaded", function () {
    const phrases = [
        "Tu Página Web,",
        "Tus Reparaciones,",
        "Marketing y SEO,",
        "Redes Sociales,",
        "Software a Medida,",
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let isCursorVisible = true;

    const typingElement = document.getElementById("typing");
    const cursorElement = document.createElement("span");
    cursorElement.className = "cursor";
    cursorElement.textContent = "|";
    typingElement.appendChild(cursorElement);

    function typeEffect() {
        const currentPhrase = phrases[currentPhraseIndex];

        if (isDeleting) {
            if (currentCharIndex > 0) {
                currentCharIndex--;
                setTimeout(typeEffect, 50);
            } else {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(typeEffect, 500);
            }
        } else {
            if (currentCharIndex < currentPhrase.length) {
                currentCharIndex++;
                setTimeout(typeEffect, 100);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, 2500);
                return;
            }
        }

        typingElement.textContent = currentPhrase.slice(0, currentCharIndex);
        typingElement.appendChild(cursorElement);
    }

    function blinkCursor() {
        isCursorVisible = !isCursorVisible;
        cursorElement.style.visibility = isCursorVisible ? "visible" : "hidden";
    }

    setInterval(blinkCursor, 500);
    typeEffect();
});
