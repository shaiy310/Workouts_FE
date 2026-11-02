import React from 'react';

import './ExerciseWeightCell.css';

import { weightOptions } from '/src/constants';
import { getWeightTooltip } from '/src/utils';

function ExerciseWeightCell({ exerciseName, equipment, index, i, weight, onWeightChange }) {
    const tooltipText = getWeightTooltip(equipment, weight);
    const opts = weightOptions[equipment] || weightOptions.BODYWEIGHT;

    function handleWeightChange(delta) {

        const isBW = opts[0] === 'BW' || weight === 0;
        if (isBW) return;

        const idx = opts.findIndex(v => Number(v) === weight);
        let newIdx = idx;
        if (delta > 0) {
            newIdx = Math.min(opts.length - 1, (idx === -1 ? 0 : idx + 1));
        } else {
            newIdx = Math.max(0, (idx === -1 ? 0 : idx - 1));
        }

        const newVal = opts[newIdx];
        if (newVal !== weight) {
            onWeightChange(exerciseName, weight, newVal);
        }
    }

    return (
        <td className="weight-cell" data-equipment={equipment} data-name={exerciseName} data-set-index={index} data-ex-index={i}>
            <button className="wt-btn wt-decrease" type="button" onClick={() => handleWeightChange(-1)}>−</button>
            <span className="wt-value" data-tooltip={tooltipText}>
                {weight}{opts[0] === 'BW' ? '' : ' Kg'}
            </span>
            <button className="wt-btn wt-increase" type="button" onClick={() => handleWeightChange(1)}>+</button>
        </td>
    );
}


export default ExerciseWeightCell;