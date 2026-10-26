import { Equipment, weightVariations, exercises } from './tempDB';

// Weight options by equipment type (used by loader.js)
export const weightOptions = {
    [Equipment.BARBELL]: Object.keys(weightVariations[Equipment.BARBELL]).map(Number).sort((a, b) => a - b),
    [Equipment.DUMBBELL]: Object.keys(weightVariations[Equipment.DUMBBELL]).map(Number).sort((a, b) => a - b),
    [Equipment.MACHINE]: ['BW'],
    [Equipment.BODYWEIGHT]: ['BW']
};

export function inferEquipment(name) {
    const n = String(name || '').toLowerCase();
    if (n.includes('dumbbell')) return 'dumbbell';
    if (n.includes('barbell')) return 'barbell';
    if (n.includes('machine') || n.includes('seated') || n.includes('leg') || n.includes('calf')) return 'machine';
    if (n.includes('dip') || n.includes('plank') || n.includes('body')) return 'bodyweight';
    return 'bodyweight';
}

export function getWeightTooltip(equipment, weightValue) {
    const variation = weightVariations[equipment]?.[weightValue] || 'BW';
    return `${equipment}: ${variation}`;
}

export function getLocalDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function getExerciseImages(exerciseName) {
    const images = exercises[exerciseName]?.images;
    return Array.isArray(images) ? images.filter(Boolean) : [];
}
