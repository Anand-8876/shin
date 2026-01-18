/* script.js */

// --- 1. SETUP IMAGES ---
// Updated list including Image 25, 26, 27, and 28
const myImages = [
    'Image (17).JPG',
    'Image (18).JPG',
    'Image (19).JPG',
    'Image (20).JPG',
    'Image (21).JPG',
    'Image (22).JPG',
    'Image (23).JPG',
    'Image (24).JPG',
    'Image (25.JPG',
    'Image (26.JPG',
    'Image (27.JPG',
    'Image (28.JPG'
];

// --- 2. GALLERY LOGIC ---
const galleryGrid = document.getElementById('gallery-grid');
if (galleryGrid) {
    // Shuffle images so they appear in random order every time
    const shuffled = [...myImages].sort(() => 0.5 - Math.random());
    
    shuffled.forEach(img => {
        const div = document.createElement('div');
        div.className = 'photo-card';
        div.innerHTML = `
            <div class="photo-placeholder">
                <img src="${img}" alt="Memories">
            </div>
        `;
        galleryGrid.appendChild(div);
    });
}

// --- 3. SURPRISE LOGIC ---

// A. Function for REGULAR colorful confetti
function launchRegularConfetti() {
    const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#32CD32', '#9400D3'];
    for (let i = 0; i < 150; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(conf);
    }
}

// B. Function for BIG PHOTO HEARTS
function launchPhotoHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'photo-heart';
        
        // Random Image from the updated list
        const img = myImages[Math.floor(Math.random() * myImages.length)];
        heart.style.backgroundImage = `url('${img}')`;
        
        // Random Position & Speed
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Random Size (Huge hearts)
        const size = Math.random() * 1.5 + 2.5; 
        heart.style.transform = `scale(${size})`;
        
        heart.style.animation = `fall ${Math.random() * 5 + 4}s linear forwards`;
        document.body.appendChild(heart);
    }
}

// C. Click Event
if (document.querySelector('.cake-container')) {
    const btn = document.getElementById('blowBtn');
    const flames = document.querySelectorAll('.flame');
    
    btn.addEventListener('click', () => {
        // 1. Blow Candles
        flames.forEach(f => f.classList.add('out'));
        
        // 2. Launch BOTH types of confetti
        launchRegularConfetti();
        launchPhotoHearts();
        
        // 3. Update Text
        document.querySelector('h1').innerText = "Yay! Happy Birthday Shinjini! 🎉";
        btn.innerText = "Enjoy your day! ❤️";
        btn.disabled = true;
        btn.style.opacity = "0.7";
    });
}

// Inject Animation Keyframes dynamically
if (!document.getElementById('anim-style')) {
    const style = document.createElement('style');
    style.id = 'anim-style';
    style.innerHTML = `
        @keyframes fall {
            to { top: 120vh; transform: rotate(720deg); }
        }
    `;
    document.head.appendChild(style);
}