document.getElementById('messageButton').addEventListener('click', function() {
    const specialMessage = document.getElementById('specialMessage');
    specialMessage.textContent = "Cada día contigo es un nuevo capítulo de nuestra hermosa historia. ¡Te amo!";
    specialMessage.classList.remove('hidden');
});
