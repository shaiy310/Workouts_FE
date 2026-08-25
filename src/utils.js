function inferEquipment(name) {
    const n = String(name || '').toLowerCase();
    if (n.includes('dumbbell')) return 'dumbbell';
    if (n.includes('barbell')) return 'barbell';
    if (n.includes('machine') || n.includes('seated') || n.includes('leg') || n.includes('calf')) return 'machine';
    if (n.includes('dip') || n.includes('plank') || n.includes('body')) return 'bodyweight';
    return 'bodyweight';
}

function getWeightTooltip(equipment, weightValue) {
    const variation = weightVariations[equipment]?.[weightValue] || 'BW';
    return `${equipment}: ${variation}`;
}

function getExerciseImages(exerciseName) {
    const images = exercises[exerciseName]?.images;
    return Array.isArray(images) ? images.filter(Boolean) : [];
}
