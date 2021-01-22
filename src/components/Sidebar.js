import * as React from 'react';
import './Sidebar.css';

function Sidebar({ onSelectPlace, points, selectedPlace }) {



    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                {points.map((point, i) =>
                    <li onClick={() => onSelectPlace(point)} className={`sidebar__list-item ${selectedPlace === point && 'sidebar__list-item_active'}`} key={i}>{point.properties.name}</li>
                )}
            </ul>
        </div>
    );
}
export default Sidebar;