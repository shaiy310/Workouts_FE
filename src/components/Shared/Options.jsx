import React from "react";

export function Options({ options }) {
    return options.map((option) => {
        return (
            <option key={option.name} value={option.name}>
                {option.name}
            </option>
        );
    });
}

export default Options;
