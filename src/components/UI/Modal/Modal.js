import React from 'react';

import './Modal.css';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
    <div>
    <BackDrop show={props.show} clicked={props.modalClosed} />
    <div className="MyModal"
        style={{transform: props.show?'translateY(0)':'translateY(-100vH)',
        opacity: props.show?'1':'0'}}
    >
        {props.children}
        <div className="close_button" onClick={props.modalClosed}>
            <button><i className="fas fa-window-close"></i></button>
        </div>
    </div>
    </div>
   )

export default modal;