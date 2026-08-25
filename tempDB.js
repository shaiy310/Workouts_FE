const overview = [
    {
        day: 1,
        focus: 'Chest & Triceps',
        stimulus: 'Push Hypertrophy & Lockout Density',
        structure: 'Set, Superset, Tri-Set'
    },
    {
        day: 2,
        focus: 'Back & Biceps',
        stimulus: 'Pull Density & Bicep Isolation',
        structure: 'Set, Superset, Tri-Set'
    },
    {
        day: 3,
        focus: 'Rest / Active Recovery',
        stimulus: 'Mobility / Light Walking / Recovery',
        structure: 'N/A',
    },
    {
        day: 4,
        focus: 'Arms Specialization',
        stimulus: 'Biceps & Triceps Antagonistic Hypertrophy',
        structure: '3 Supersets, Tri-Set'
    },
    {
        day: 5,
        focus: 'Legs, Shoulders & Chest Touch-up',
        stimulus: 'Compound Lower Body & Chest Volumization',
        structure: '2 Supersets, Tri-Set'
    },
    {
        day: 6,
        focus: 'Rest / Recovery',
        stimulus: 'Muscle Repair & Recovery',
        structure: 'N/A'
    },
    {
        day: 7,
        focus: 'Rest / Recovery',
        stimulus: 'Muscle Repair & Recovery',
        structure: 'N/A'
    }
];

const workouts = {
    1: {
        title: 'Chest & Triceps',
        duration: 40,
        emphasis: 'Sternal Chest & Triceps Mechanical Tension',
        sets: [[
            {
                name: 'Barbell Flat Bench Press',
                sets: 4,
                reps: 8,
                rest: 90,
                currentWeight: 13
            }],
        [{
            name: 'Dumbbell Bench Press',
            sets: 3,
            reps: 10,
            rest: 0,
            currentWeight: 9.75
        },
        {
            name: 'Close-Grip Barbell Bench Press',
            sets: 3,
            reps: 8,
            rest: 75,
            currentWeight: 13
        }],
        [{
            name: 'Dumbbell Chest Flyes',
            sets: 3,
            reps: 12,
            rest: 0,
            currentWeight: 6.75
        },
        {
            name: 'Lying Triceps Skullcrushers',
            sets: 3,
            reps: 10,
            rest: 0,
            currentWeight: 6.75
        },
        {
            name: 'Bench Dips',
            sets: 3,
            reps: 12,
            rest: 60
        }]
        ],
    },
    2: {
        title: 'Back & Biceps',
        duration: 40,
        emphasis: 'Lats, Rhomboids & Biceps Mechanical Tension',
        sets: [[
            {
                name: 'Single-Arm Dumbbell Row',
                sets: 3,
                reps: 10,
                rest: 90,
                currentWeight: 11.5
            }],
        [{
            name: 'Bent-Over Barbell Row',
            sets: 4,
            reps: 8,
            rest: 0,
            currentWeight: 17.5
        },
        {
            name: 'Standing Barbell Bicep Curls',
            sets: 3,
            reps: 8,
            rest: 75,
            currentWeight: 17.5
        }],
        [{
            name: 'Chest-Supported Dumbbell Row',
            sets: 3,
            reps: 12,
            rest: 0,
            currentWeight: 12
        },
        {
            name: 'Seated Dumbbell Bicep Curls',
            sets: 3,
            reps: 10,
            rest: 0,
            currentWeight: 9
        },
        {
            name: 'Dumbbell Reverse Flyes',
            sets: 3,
            reps: 15,
            rest: 60,
            currentWeight: 5.5
        }]
        ]
    },
    3: {
        title: 'Rest / Active Recovery',
        notes: 'Light walking, foam rolling, and dynamic stretching.',
        sets: []
    },
    4: {
        title: 'Arms Specialization',
        sets: [[
            {
                name: 'Standing Barbell Bicep Curls',
                sets: 3,
                reps: 8,
                rest: 0
            },
            {
                name: 'Overhead Dumbbell Extension',
                sets: 3,
                reps: 10,
                rest: 60
            }],
        [{
            name: 'Concentration Curls',
            sets: 3,
            reps: 10,
            rest: 0
        },
        {
            name: 'Lying Triceps Skullcrushers',
            sets: 3,
            reps: 10,
            rest: 60
        }],
        [{
            name: 'Seated Dumbbell Bicep Curls',
            sets: 3,
            reps: 12,
            rest: 0
        },
        {
            name: 'Bench Dips',
            sets: 3,
            reps: 15,
            rest: 60
        }],
        [{
            name: 'Bench Seated Knee Tucks',
            sets: 3,
            reps: 15,
            rest: 0
        },
        {
            name: 'Lying Bench Reverse Crunches',
            sets: 3,
            reps: 12,
            rest: 0
        },
        {
            name: 'Elevated Bench Plank Holds',
            sets: 3,
            reps: 45,
            rest: 45
        }]
        ]
    },
    5: {
        title: 'Legs, Shoulders & Chest Touch-up',
        sets: [[
            {
                name: 'Bulgarian Split Squats',
                sets: 3,
                reps: 8,
                rest: 0
            },
            {
                name: 'Dumbbell Straight-Arm Pullover',
                sets: 3,
                reps: 10,
                rest: 75
            }],
        [{
            name: 'Barbell Romanian Deadlift (RDL)',
            sets: 3,
            reps: 8,
            rest: 0
        },
        {
            name: 'Weighted Flat Bench Crunches',
            sets: 3,
            reps: 12,
            rest: 60
        }],
        [{
            name: 'Dumbbell Step-Ups',
            sets: 3,
            reps: 10,
            rest: 0
        },
        {
            name: 'Dumbbell Chest Flyes',
            sets: 3,
            reps: 12,
            rest: 0
        },
        {
            name: 'Seated Calf Raises',
            sets: 3,
            reps: 15,
            rest: 60
        }]
        ]
    }
};

// Equipment enum (use lowercase values to match `weightOptions` and inferEquipment())
const Equipment = Object.freeze({
    BARBELL: 'barbell',
    DUMBBELL: 'dumbbell',
    MACHINE: 'machine',
    BODYWEIGHT: 'bodyweight'
});

exercises = {
    'Barbell Flat Bench Press': {
        equipment: Equipment.BARBELL,
        weight: 13,
        images: []
    },
    'Dumbbell Bench Press': {
        equipment: Equipment.DUMBBELL,
        weight: 9.75
    },
    'Close-Grip Barbell Bench Press': {
        equipment: Equipment.BARBELL,
        weight: 13
    },
    'Dumbbell Chest Flyes': {
        equipment: Equipment.DUMBBELL,
        weight: 6.75
    },
    'Lying Triceps Skullcrushers': {
        equipment: Equipment.DUMBBELL,
        weight: 6.75
    },
    'Bench Dips': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0
    },
    'Bent-Over Barbell Row': {
        equipment: Equipment.BARBELL,
        weight: 18
    },
    'Single-Arm Dumbbell Row': {
        equipment: Equipment.DUMBBELL,
        weight: 15
    },
    'Standing Barbell Bicep Curls': {
        equipment: Equipment.BARBELL,
        weight: 18,
        images: ['/Imgs/Standing Barbell Bicep Curls.gif']
    },

    'Seated Dumbbell Bicep Curls': {
        equipment: Equipment.DUMBBELL,
        weight: 9,
        images: ['/Imgs/Seated Dumbbell Bicep Curls.webp']
    },
    'Chest-Supported Dumbbell Row': {
        equipment: Equipment.DUMBBELL,
        weight: 15,
        images: ['/Imgs/Chest-Supported Dumbbell Row.webp']
    },
    'Dumbbell Reverse Flyes': {
        equipment: Equipment.DUMBBELL,
        weight: 6.75
    },
    'Overhead Dumbbell Extension': {
        equipment: Equipment.DUMBBELL,
        weight: 6.75
    },
    'Concentration Curls': {
        equipment: Equipment.DUMBBELL,
        weight: 6.75
    },
    'Bench Seated Knee Tucks': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0
    },
    'Lying Bench Reverse Crunches': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0
    },
    'Elevated Bench Plank Holds': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0
    },
    'Bulgarian Split Squats': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0
    },
    'Dumbbell Straight-Arm Pullover': {
        equipment: Equipment.DUMBBELL,
        weight: 6.75
    },
    'Barbell Romanian Deadlift (RDL)': {
        equipment: Equipment.BARBELL,
        weight: 35
    },
    'Weighted Flat Bench Crunches': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0
    },
    'Dumbbell Step-Ups': {
        equipment: Equipment.DUMBBELL,
        weight: 9.75
    },
    'Seated Calf Raises': {
        equipment: Equipment.MACHINE,
        weight: 0
    }
}

const weightVariations = {
    [Equipment.BARBELL]: {
        1.0: [0, 0, 0],
        4.0: [1, 0, 0],
        7.0: [2, 0, 0],
        10.0: [3, 0, 0],
        13.0: [4, 0, 0],
        16.0: [5, 0, 0],
        19.0: [6, 0, 0],
        22.0: [7, 0, 0],
        25.0: [8, 0, 0],
        3.5: [0, 0, 2],
        6.5: [1, 0, 2],
        9.5: [2, 0, 2],
        12.5: [3, 0, 2],
        15.5: [4, 0, 2],
        18.5: [5, 0, 2],
        21.5: [6, 0, 2],
        24.5: [7, 0, 2],
        27.5: [8, 0, 2],
        6.0: [0, 2, 0],
        9.0: [1, 2, 0],
        12.0: [2, 2, 0],
        15.0: [3, 2, 0],
        18.0: [4, 2, 0],
        21.0: [5, 2, 0],
        24.0: [6, 2, 0],
        27.0: [7, 2, 0],
        30.0: [8, 2, 0],
        8.5: [0, 2, 2],
        11.5: [1, 2, 2],
        14.5: [2, 2, 2],
        17.5: [3, 2, 2],
        20.5: [4, 2, 2],
        23.5: [5, 2, 2],
        26.5: [6, 2, 2],
        29.5: [7, 2, 2],
        32.5: [8, 2, 2],
        11.0: [0, 4, 0],
        14.0: [1, 4, 0],
        17.0: [2, 4, 0],
        20.0: [3, 4, 0],
        23.0: [4, 4, 0],
        26.0: [5, 4, 0],
        29.0: [6, 4, 0],
        32.0: [7, 4, 0],
        35.0: [8, 4, 0],
        2.25: [0, 0, 1],
        5.25: [1, 0, 1],
        8.25: [2, 0, 1],
        11.25: [3, 0, 1],
        14.25: [4, 0, 1],
        17.25: [5, 0, 1],
        20.25: [6, 0, 1],
        23.25: [7, 0, 1],
        26.25: [8, 0, 1],
        4.75: [0, 1, 1],
        7.75: [1, 1, 1],
        10.75: [2, 1, 1],
        13.75: [3, 1, 1],
        16.75: [4, 1, 1],
        19.75: [5, 1, 1],
        22.75: [6, 1, 1],
        25.75: [7, 1, 1],
        28.75: [8, 1, 1],
        7.25: [0, 2, 1],
        10.25: [1, 2, 1],
        13.25: [2, 2, 1],
        16.25: [3, 2, 1],
        19.25: [4, 2, 1],
        22.25: [5, 2, 1],
        25.25: [6, 2, 1],
        28.25: [7, 2, 1],
        31.25: [8, 2, 1],
        9.75: [0, 3, 1],
        12.75: [1, 3, 1],
        15.75: [2, 3, 1],
        18.75: [3, 3, 1],
        21.75: [4, 3, 1],
        24.75: [5, 3, 1],
        27.75: [6, 3, 1],
        30.75: [7, 3, 1],
        33.75: [8, 3, 1],
        12.25: [0, 4, 1],
        15.25: [1, 4, 1],
        18.25: [2, 4, 1],
        21.25: [3, 4, 1],
        24.25: [4, 4, 1],
        27.25: [5, 4, 1],
        30.25: [6, 4, 1],
        33.25: [7, 4, 1],
        36.25: [8, 4, 1],
        13.5: [0, 4, 2],
        16.5: [1, 4, 2],
        19.5: [2, 4, 2],
        22.5: [3, 4, 2],
        25.5: [4, 4, 2],
        28.5: [5, 4, 2],
        31.5: [6, 4, 2],
        34.5: [7, 4, 2],
        37.5: [8, 4, 2],
        14.75: [0, 4, 3],
        17.75: [1, 4, 3],
        20.75: [2, 4, 3],
        23.75: [3, 4, 3],
        26.75: [4, 4, 3],
        29.75: [5, 4, 3],
        32.75: [6, 4, 3],
        35.75: [7, 4, 3],
        38.75: [8, 4, 3],
        28.0: [4, 4, 4],
        31.0: [5, 4, 4],
        34.0: [6, 4, 4],
        37.0: [7, 4, 4],
        40.0: [8, 4, 4]
    },
    [Equipment.DUMBBELL]: {
        0.5: [0, 0, 0],
        1.75: [0, 0, 1],
        3.0: [0, 0, 2],
        3.5: [1, 0, 0],
        4.25: [0, 1, 1],
        4.75: [1, 0, 1],
        5.5: [0, 2, 0],
        6.0: [1, 0, 2],
        6.5: [2, 0, 0],
        6.75: [0, 2, 1],
        7.25: [1, 1, 1],
        7.75: [2, 0, 1],
        8.0: [0, 2, 2],
        8.5: [1, 2, 0],
        9.0: [2, 0, 2],
        9.5: [3, 0, 0],
        9.75: [1, 2, 1],
        10.25: [2, 1, 1],
        10.75: [3, 0, 1],
        11.0: [1, 2, 2],
        11.5: [2, 2, 0],
        12.0: [3, 0, 2],
        12.5: [4, 0, 0],
        12.75: [2, 2, 1],
        13.25: [3, 1, 1],
        13.75: [4, 0, 1],
        14.0: [2, 2, 2],
        14.5: [3, 2, 0],
        15.0: [4, 0, 2],
        15.75: [3, 2, 1],
        16.25: [4, 1, 1],
        17.0: [3, 2, 2],
        17.5: [4, 2, 0],
        18.75: [4, 2, 1],
        20.0: [4, 2, 2]
    }
}

// Weight options by equipment type (used by loader.js)
const weightOptions = {
    [Equipment.BARBELL]: Object.keys(weightVariations[Equipment.BARBELL]).map(Number).sort((a, b) => a - b),
    [Equipment.DUMBBELL]: Object.keys(weightVariations[Equipment.DUMBBELL]).map(Number).sort((a, b) => a - b),
    [Equipment.MACHINE]: ['BW'],
    [Equipment.BODYWEIGHT]: ['BW']
};