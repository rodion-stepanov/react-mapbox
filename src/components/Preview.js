import * as React from 'react';
import './Preview.css';
function Preview({ onClose, isPreviewOpen }) {

    const previewHidden = isPreviewOpen ? '' : 'preview_hidden';
    return (
        <div className={`preview ${previewHidden}`}>
            <h1 className='preview__title'>Туристические точки притяжения Калиниграда</h1>
            <button onClick={onClose} className='preview__button'>Перейти к карте</button>
        </div>
    );
}
export default Preview;