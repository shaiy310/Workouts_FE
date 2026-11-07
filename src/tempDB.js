import { Equipment } from './constants';

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

const workouts_v1= {
    1: {
        title: 'Chest & Triceps',
        duration: 40,
        emphasis: 'Sternal Chest & Triceps Mechanical Tension',
        sets: [[
            {
                name: 'Barbell Flat Bench Press',
                sets: 4,
                reps: 8,
                rest: 90
            }],
        [{
            name: 'Flat Dumbbell Bench Press',
            sets: 3,
            reps: 10,
            rest: 0
        },
        {
            name: 'Close-Grip Barbell Bench Press',
            sets: 3,
            reps: 8,
            rest: 75
        }],
        [{
            name: 'Dumbbell Chest Flyes',
            sets: 3,
            reps: 12,
            rest: 0
        },
        {
            name: 'Lying Triceps Skullcrushers',
            sets: 3,
            reps: 10,
            rest: 0
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
                sets: 4,
                reps: 10,
                rest: 90
            }],
        [{
            name: 'Bent-Over Barbell Row',
            sets: 3,
            reps: 8,
            rest: 0
        },
        {
            name: 'Standing Barbell Bicep Curls',
            sets: 3,
            reps: 8,
            rest: 75
        }],
        [{
            name: 'Chest-Supported Dumbbell Row',
            sets: 3,
            reps: 12,
            rest: 0
        },
        {
            name: 'Seated Dumbbell Bicep Curls',
            sets: 3,
            reps: 10,
            rest: 0
        },
        {
            name: 'Dumbbell Reverse Flyes',
            sets: 3,
            reps: 15,
            rest: 60
        }]
        ]
    },
    3: {
        title: 'Arms Specialization',
        duration: 40,
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
            name: 'Dumbbell Skullcrushers',
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
    4: {
        title: 'Rest / Active Recovery',
        duration: 30,
        notes: 'Light walking, foam rolling, and dynamic stretching.',
        sets: []
    },
    5: {
        title: 'Legs, Shoulders & Chest Touch-up',
        duration: 40,
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
            name: 'Seated Dumbbell Calf Raises',
            sets: 3,
            reps: 15,
            rest: 60
        }]
        ]
    }
};

const workouts_v2 = {
    1: {
        title: 'Chest, Shoulders & Triceps',
        duration: 40,
        emphasis: 'Chest Mass, Shoulder Width & Triceps Tension',
        sets: [
            [
                {
                    name: 'Barbell Flat Bench Press',
                    sets: 4,
                    reps: 8,
                    rest: 90
                }
            ],
            [
                {
                    name: 'Seated Dumbbell Shoulder Press',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Dumbbell Lateral Raises',
                    sets: 3,
                    reps: 12,
                    rest: 75
                }
            ],
            [
                {
                    name: 'Dumbbell Chest Flyes',
                    sets: 3,
                    reps: 12,
                    rest: 0
                },
                {
                    name: 'Lying Triceps Skullcrushers',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Bench Dips',
                    sets: 3,
                    reps: 12,
                    rest: 60
                }
            ]
        ]
    },
    2: {
        title: 'Back, Biceps & Abs',
        duration: 40,
        emphasis: 'Lat Width, Bicep Peak & Core Stability',
        sets: [
            [
                {
                    name: 'Bent-Over Barbell Row',
                    sets: 4,
                    reps: 8,
                    rest: 90
                }
            ],
            [
                {
                    name: 'Single-Arm Dumbbell Row',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Standing Barbell Bicep Curls',
                    sets: 3,
                    reps: 8,
                    rest: 75
                }
            ],
            [
                {
                    name: 'Dumbbell Hammer Curls',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Dumbbell Reverse Flyes',
                    sets: 3,
                    reps: 15,
                    rest: 0
                },
                {
                    name: 'Weighted Flat Bench Crunches',
                    sets: 3,
                    reps: 12,
                    rest: 60
                }
            ]
        ]
    },
    3: {
        title: 'Arms & Shoulders Hypertrophy',
        duration: 40,
        emphasis: 'Dedicated Arm & Shoulder Volume',
        sets: [
            [
                {
                    name: 'Dumbbell Lateral Raises',
                    sets: 3,
                    reps: 12,
                    rest: 0
                },
                {
                    name: 'Overhead Dumbbell Extension',
                    sets: 3,
                    reps: 10,
                    rest: 60
                }
            ],
            [
                {
                    name: 'Concentration Curls',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Dumbbell Skullcrushers',
                    sets: 3,
                    reps: 10,
                    rest: 60
                }
            ],
            [
                {
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
                }
            ],
            [
                {
                    name: 'Bench Seated Knee Tucks',
                    sets: 3,
                    reps: 15,
                    rest: 0
                },
                {
                    name: 'Elevated Bench Plank Holds',
                    sets: 3,
                    reps: 45,
                    rest: 45
                }
            ]
        ]
    },
    4: {
        title: 'Rest / Active Recovery',
        duration: 30,
        notes: 'Light walking, mobility work, and light stretching.',
        sets: []
    },
    5: {
        title: 'Legs & Upper Body Touch-up',
        duration: 40,
        emphasis: 'Low-Volume Legs with Upper Body Pump',
        sets: [
            [
                {
                    name: 'Barbell Romanian Deadlift (RDL)',
                    sets: 3,
                    reps: 8,
                    rest: 0
                },
                {
                    name: 'Barbell Flat Bench Press',
                    sets: 3,
                    reps: 8,
                    rest: 75
                }
            ],
            [
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
                    rest: 60
                }
            ],
            [
                {
                    name: 'Seated Dumbbell Calf Raises',
                    sets: 3,
                    reps: 15,
                    rest: 0
                },
                {
                    name: 'Dumbbell Lateral Raises',
                    sets: 3,
                    reps: 15,
                    rest: 60
                }
            ]
        ]
    }
};

const workouts_v3 = {
    1: {
        title: 'Chest & Biceps (P1 Focus)',
        duration: 40,
        emphasis: 'Chest Mass & Bicep Peak (Pure Dumbbell & Barbell Separation)',
        sets: [
            [
                {
                    name: 'Barbell Flat Bench Press',
                    sets: 4,
                    reps: 8,
                    rest: 90
                }
            ],
            [
                {
                    name: 'Flat Dumbbell Bench Press',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Seated Dumbbell Bicep Curls',
                    sets: 3,
                    reps: 10,
                    rest: 75
                }
            ],
            [
                {
                    name: 'Dumbbell Chest Flyes',
                    sets: 3,
                    reps: 12,
                    rest: 0
                },
                {
                    name: 'Dumbbell Hammer Curls',
                    sets: 3,
                    reps: 10,
                    rest: 60
                }
            ]
        ]
    },
    2: {
        title: 'Shoulders & Triceps (P2 Focus)',
        duration: 40,
        emphasis: 'Shoulder Width & Triceps Density',
        sets: [
            [
                {
                    name: 'Standing Barbell Overhead Press',
                    sets: 4,
                    reps: 8,
                    rest: 90
                }
            ],
            [
                {
                    name: 'Seated Dumbbell Shoulder Press',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Dumbbell Lateral Raises',
                    sets: 3,
                    reps: 12,
                    rest: 75
                }
            ],
            [
                {
                    name: 'Lying Triceps Skullcrushers',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Bench Dips',
                    sets: 3,
                    reps: 12,
                    rest: 60
                }
            ]
        ]
    },
    3: {
        title: 'Back & Abs (P3 Focus)',
        duration: 40,
        emphasis: 'Lat Width, Mid-Back Thickness & Core Strength',
        sets: [
            [
                {
                    name: 'Bent-Over Barbell Row',
                    sets: 4,
                    reps: 8,
                    rest: 0
                },
                {
                    name: 'Single-Arm Dumbbell Row',
                    sets: 3,
                    reps: 10,
                    rest: 90
                }
            ],
            [
                {
                    name: 'Dumbbell Reverse Flyes',
                    sets: 3,
                    reps: 15,
                    rest: 75
                }
            ],
            [
                {
                    name: 'Lying Bench Reverse Crunches',
                    sets: 3,
                    reps: 12,
                    rest: 0
                },
                {
                    name: 'Weighted Flat Bench Crunches',
                    sets: 3,
                    reps: 12,
                    rest: 60
                }
            ]
        ]
    },
    4: {
        title: 'Rest / Active Recovery',
        duration: 30,
        notes: '3–5K walk or light run for leg endurance and fat loss, plus mobility work.',
        sets: []
    },
    5: {
        title: 'Arms Hypertrophy & Chest Touch-up',
        duration: 40,
        emphasis: 'P1 Arm Specialization & Finisher Volume',
        sets: [
            [
                {
                    name: 'Close-Grip Barbell Bench Press',
                    sets: 3,
                    reps: 8,
                    rest: 0
                },
                {
                    name: 'Standing Barbell Bicep Curls',
                    sets: 3,
                    reps: 8,
                    rest: 75
                }
            ],
            [
                {
                    name: 'Concentration Curls',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Dumbbell Skullcrushers',
                    sets: 3,
                    reps: 10,
                    rest: 60
                }
            ],
            [
                {
                    name: 'Dumbbell Hammer Curls',
                    sets: 3,
                    reps: 10,
                    rest: 0
                },
                {
                    name: 'Overhead Dumbbell Extension',
                    sets: 3,
                    reps: 10,
                    rest: 60
                }
            ]
        ]
    }
};

export const workoutByday = {
    1: 'Chest & Biceps (P1 Focus)',
    2: 'Shoulders & Triceps (P2 Focus)',
    3: 'Back & Abs (P3 Focus)',
    4: 'Rest / Active Recovery',
    5: 'Arms Hypertrophy & Chest Touch-up',
}
export const workouts = {
    'Chest & Biceps (P1 Focus)': {
        title: 'Chest & Biceps (P1 Focus)',
        duration: 40,
        emphasis: 'Chest Mass & Bicep Peak (Pure Dumbbell & Barbell Separation)',
        sets: [
            {
                num: 4,
                rest: 40,
                exercises: [
                    {'name': 'Barbell Flat Bench Press', 'reps': 8},
                ],
            },
            {
                num: 3,
                rest: 50,
                exercises: [
                    {'name': 'Flat Dumbbell Bench Press', 'reps': 10},
                    {'name': 'Seated Dumbbell Bicep Curls', 'reps': 10},
                ],
            },
            {
                num: 3,
                rest: 60,
                exercises: [
                    {'name': 'Dumbbell Chest Flyes', 'reps': 12},
                    {'name': 'Dumbbell Hammer Curls', 'reps': 10},
                ],
            }
        ],
    },
    'Shoulders & Triceps (P2 Focus)': {
        title: 'Shoulders & Triceps (P2 Focus)',
        duration: 40,
        emphasis: 'Shoulder Width & Triceps Density',
        sets: [
            {
                num: 4,
                rest: 90,
                exercises: [
                    {'name': 'Standing Barbell Overhead Press', 'reps': 8},
                ],
            },
            {
                num: 3,
                rest: 75,
                exercises: [
                    {'name': 'Seated Dumbbell Shoulder Press', 'reps': 10},
                    {'name': 'Lying Triceps Skullcrushers', 'reps': 10},
                ],
            },
            {
                num: 3,
                rest: 60,
                exercises: [
                    {'name': 'Dumbbell Lateral Raises', 'reps': 12},
                    {'name': 'Bench Dips', 'reps': 12},
                ],
            },
        ]
    },
    'Back & Abs (P3 Focus)': {
        title: 'Back & Abs (P3 Focus)',
        duration: 40,
        emphasis: 'Lat Width, Mid-Back Thickness & Core Strength',
        sets: [
            {
                num: 4,
                rest: 90,
                exercises: [
                    {'name': 'Bent-Over Barbell Row', 'reps': 8},
                    {'name': 'Single-Arm Dumbbell Row', 'reps': 10},
                ]
            },
            {
                num: 3,
                rest: 75,
                exercises: [
                    {'name': 'Dumbbell Reverse Flyes', 'reps': 15},
                    {'name': 'Weighted Flat Bench Crunches', 'reps': 12},
                ]
            },
            {
                num: 3,
                rest: 60,
                exercises: [
                    {'name': 'Lying Bench Reverse Crunches', 'reps': 12},
                    {'name': 'Weighted Flat Bench Crunches', 'reps': 12},
                ]
            }
        ]
    },
    'Rest / Active Recovery': {
        title: 'Rest / Active Recovery',
        duration: 30,
        notes: '3–5K walk or light run for leg endurance and fat loss, plus mobility work.',
        sets: []
    },
    'Arms Hypertrophy & Chest Touch-up': {
        title: 'Arms Hypertrophy & Chest Touch-up',
        duration: 40,
        emphasis: 'P1 Arm Specialization & Finisher Volume',
        sets: [
            {
                num: 3,
                rest: 75,
                exercises: [
                    {'name': 'Close-Grip Barbell Bench Press', 'reps': 8},
                    {'name': 'Standing Barbell Bicep Curls', 'reps': 8},
                ]
            },
            {
                num: 3,
                rest: 60,
                exercises: [
                    {'name': 'Concentration Curls', 'reps': 10},
                    {'name': 'Dumbbell Skullcrushers', 'reps': 10},
                ]
            },
            {
                num: 3,
                rest: 60,
                exercises: [
                    {'name': 'Dumbbell Hammer Curls', 'reps': 10},
                    {'name': 'Overhead Dumbbell Extension', 'reps': 10},
                ]
            }
        ]
    }
};

export const exercises = {
    'Standing Barbell Overhead Press': {
        equipment: Equipment.BARBELL,
        weight: 18,
        images: ['/Imgs/Standing Barbell Overhead Press.gif']
    },
    'Seated Dumbbell Shoulder Press': {
        equipment: Equipment.DUMBBELL,
        weight: 9,
        images: ['/Imgs/Seated Dumbbell Shoulder Press.gif']
    },
    'Dumbbell Lateral Raises': {
        equipment: Equipment.DUMBBELL,
        weight: 5.5,
        images: ['/Imgs/lateral-to-front-raise-combo.gif']
    },
    'Dumbbell Hammer Curls': {
        equipment: Equipment.DUMBBELL,
        weight: 9.75,
        images: ['/Imgs/Dumbbell Hammer Curls.gif']
    },
    'Barbell Flat Bench Press': {
        equipment: Equipment.BARBELL,
        weight: 18,
        images: ['/Imgs/Barbell Flat Bench Press.gif']
    },
    'Flat Dumbbell Bench Press': {
        equipment: Equipment.DUMBBELL,
        weight: 9.75,
        images: ['/Imgs/Flat Dumbbell Bench Press.gif']
    },
    'Close-Grip Barbell Bench Press': {
        equipment: Equipment.BARBELL,
        weight: 13,
        images: ['/Imgs/Close-Grip Barbell Bench Press.gif']
    },
    'Dumbbell Chest Flyes': {
        equipment: Equipment.DUMBBELL,
        weight: 6.75
    },
    'Lying Triceps Skullcrushers': {
        equipment: Equipment.DUMBBELL,
        weight: 12.5,
        images: ['/Imgs/Lying Triceps Skullcrushers.gif']
    },
    'Dumbbell Skullcrushers': {
        equipment: Equipment.DUMBBELL,
        weight: 9.75,
        images: ['/Imgs/Dumbbell Skullcrushers.gif']
    },
    'Bench Dips': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0,
        images: ['/Imgs/Bench Dips.gif']
    },
    'Bent-Over Barbell Row': {
        equipment: Equipment.BARBELL,
        weight: 18,
        images: ['/Imgs/Bent-Over Barbell Row.gif']
    },
    'Single-Arm Dumbbell Row': {
        equipment: Equipment.DUMBBELL,
        weight: 11.5,
        images: ['/Imgs/Single-Arm Dumbbell Row.gif']
    },
    'Standing Barbell Bicep Curls': {
        equipment: Equipment.BARBELL,
        weight: 18,
        images: ['/Imgs/Standing Barbell Bicep Curls.gif']
    },
    'Seated Dumbbell Bicep Curls': {
        equipment: Equipment.DUMBBELL,
        weight: 9,
        images: ['/Imgs/Seated Dumbbell Bicep Curls.gif']
    },
    'Chest-Supported Dumbbell Row': {
        equipment: Equipment.DUMBBELL,
        weight: 12,
        images: ['/Imgs/Chest-Supported Dumbbell Row.gif']
    },
    'Dumbbell Reverse Flyes': {
        equipment: Equipment.DUMBBELL,
        weight: 5.5,
        images: ['/Imgs/Dumbbell Reverse Flyes.gif']
    },
    'Overhead Dumbbell Extension': {
        equipment: Equipment.DUMBBELL,
        weight: 12,
        images: ['/Imgs/Overhead Dumbbell Extension.gif']
    },
    'Concentration Curls': {
        equipment: Equipment.DUMBBELL,
        weight: 9.75,
        images: ['/Imgs/Concentration Curls.gif']
    },
    'Bench Seated Knee Tucks': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0,
        images: ['/Imgs/Bench Crunch.gif']
    },
    'Lying Bench Reverse Crunches': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0,
        images: ['/Imgs/Lying Bench Reverse Crunches.gif']
    },
    'Elevated Bench Plank Holds': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0
    },
    'Bulgarian Split Squats': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0,
        images: ['/Imgs/Bulgarian Split Squats.gif']
    },
    'Dumbbell Straight-Arm Pullover': {
        equipment: Equipment.DUMBBELL,
        weight: 12.5,
        images: ['/Imgs/Dumbbell Straight-Arm Pullover.gif']
    },
    'Barbell Romanian Deadlift (RDL)': {
        equipment: Equipment.BARBELL,
        weight: 18,
        images: ['/Imgs/Barbell Romanian Deadlift.gif']
    },
    'Weighted Flat Bench Crunches': {
        equipment: Equipment.BODYWEIGHT,
        weight: 0,
        images: ['/Imgs/Weighted Flat Bench Crunches.gif']
    },
    'Dumbbell Step-Ups': {
        equipment: Equipment.DUMBBELL,
        weight: 9.75,
        images: ['/Imgs/Dumbbell Step-Ups.gif']
    },
    'Seated Dumbbell Calf Raises': {
        equipment: Equipment.DUMBBELL,
        weight: 0,
        images: ['/Imgs/Seated Dumbbell Calf Raises.gif']
    }
}