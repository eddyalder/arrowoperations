// WASD and arrow keys are the only valid keys for strats
const validKeys = [
    'w',
    'a',
    's',
    'd',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
];

export function isKeyValid(key: string): boolean {
    return validKeys.includes(key);
}