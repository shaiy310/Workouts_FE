import React from 'react';
import { exercises } from '../tempDB';
import { getWeightTooltip, weightOptions } from '../utils';
import './ExerciseWeightCell.css';

function ExerciseWeightCell({ exercise, equipment, index, i, weight, onWeightChange }) {
    const currentWeight = weight ?? exercises[exercise.name]?.weight;
    const tooltipText = getWeightTooltip(equipment, currentWeight);
    const opts = weightOptions[equipment] || weightOptions.bodyweight;

    function handleWeightChange(delta) {

        const isBW = opts[0] === 'BW' || currentWeight === 0;
        if (isBW) return;

        const idx = opts.findIndex(v => Number(v) === currentWeight);
        let newIdx = idx;
        if (delta > 0) {
            newIdx = Math.min(opts.length - 1, (idx === -1 ? 0 : idx + 1));
        } else {
            newIdx = Math.max(0, (idx === -1 ? 0 : idx - 1));
        }

        const newVal = opts[newIdx];
        if (newVal !== currentWeight) {
            onWeightChange(exercise.name, currentWeight, newVal);
        }
    }

    return (
        <td className="weight-cell" data-equipment={equipment} data-name={exercise.name} data-set-index={index} data-ex-index={i}>
            <button className="wt-btn wt-decrease" type="button" onClick={() => handleWeightChange(-1)}>−</button>
            <span className="wt-value" data-tooltip={tooltipText}>
                {currentWeight}{opts[0] === 'BW' ? '' : ' Kg'}
            </span>
            <button className="wt-btn wt-increase" type="button" onClick={() => handleWeightChange(1)}>+</button>
        </td>
    );
}


export default ExerciseWeightCell;