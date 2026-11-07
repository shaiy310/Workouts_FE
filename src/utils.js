import { Equipment, weightVariations } from './constants';

export function sortObjectsByName(exercises) { 
    return Object.entries(exercises)
        .map(([name, details]) => ({ name, ...details }))
        .sort((first, second) => first.name.localeCompare(second.name))
}

export function inferEquipment(name) {
    const n = String(name || '').toLowerCase();
    if (n.includes('dumbbell')) return Equipment.DUMBBELL;
    if (n.includes('barbell')) return Equipment.BARBELL;
    if (n.includes('machine') || n.includes('seated') || n.includes('leg') || n.includes('calf')) return Equipment.MACHINE;
    if (n.includes('dip') || n.includes('plank') || n.includes('body')) return Equipment.BODYWEIGHT;
    return Equipment.BODYWEIGHT;
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

export function getExerciseImages(exercises, exerciseName) {
    const images = exercises[exerciseName]?.images;
    return Array.isArray(images) ? images.filter(Boolean) : (images ? [images] : []);
}
