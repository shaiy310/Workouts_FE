import React from 'react';

import './ObjectDirectoryList.css'

function ObjectDirectoryList({
    objects,
    selectedObjectName,
    onSelect,
    title = 'All objects',
    ariaLabel = 'Objects',
}) {
    return (
        <aside className="object-directory" aria-label={ariaLabel}>
            <div className="object-directory-heading">
                <h3>{title}</h3>
                <span>{objects.length}</span>
            </div>
            <ul>
                {objects.map((obj) => (
                    <li key={obj.name}>
                        <button
                            type="button"
                            className={`object-directory-item${obj.name === selectedObjectName ? ' selected' : ''}`}
                            aria-current={obj.name === selectedObjectName ? 'true' : undefined}
                            onClick={() => onSelect(obj.name)}
                        >
                            <span>{obj.name}</span>
                            <span className="object-list-chevron" aria-hidden="true">›</span>
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default ObjectDirectoryList;
