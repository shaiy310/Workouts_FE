import React from "react";

import './PageHeader.css'

function PageHeader({ title, eyebrow, description, buttons }) {
    return (
        <header className="page-header">
            <div className="page-header__content">
                <p className="page-eyebrow">{eyebrow}</p>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="page-header__actions">
                {buttons.map((btn) => {
                    return <button
                        type="button"
                        className={"page-button " + (btn.isPrimary ? "primary" : "secondary")}
                        onClick={btn.onClick}
                    >
                        {btn.text}
                    </button>
                })}
            </div>
        </header>
    );
}

export default PageHeader;