// Sound effects utility
const sounds = {
    arrowPress: new Audio('/src/assets/sounds/arrowPress.mp3'),
    arrowIncorrect: new Audio('/src/assets/sounds/arrowIncorrect.mp3'),
    stratComplete: new Audio('/src/assets/sounds/stratComplete.mp3'),
};

// Preload sounds
Object.values(sounds).forEach(sound => {
    sound.load();
});

export const playSound = (soundName: keyof typeof sounds) => {
    const sound = sounds[soundName];
    sound.currentTime = 0; // Reset to start
    sound.play().catch(err => console.log('Sound play failed:', err));
};
