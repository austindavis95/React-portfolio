import React from 'react';



function Modal() {

    return (
        // JSX
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Photo Name</h3>
                <img alt="current category" />
                <p>
                    Photo Description
                </p>
                <button type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;