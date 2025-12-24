function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    
    // Randomly pick a snowflake character
    const particles = ['❄', '❅', '❆', '•'];
    snowflake.innerHTML = particles[Math.floor(Math.random() * particles.length)];
    
    snowflake.classList.add('snowflake');
    
    // Randomize position and size
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.opacity = Math.random();
    
    // Randomize fall duration (between 3s and 7s)
    const duration = Math.random() * 4 + 3;
    snowflake.style.transition = `transform ${duration}s linear, opacity ${duration}s`;
    
    snowContainer.appendChild(snowflake);

    // Start falling
    setTimeout(() => {
        snowflake.style.transform = `translateY(105vh)`;
    }, 10);

    // Remove snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Create a new snowflake every 200ms
setInterval(createSnowflake, 200);