export const playSound = (sound: string) => {
    new Audio(sound).play();
};