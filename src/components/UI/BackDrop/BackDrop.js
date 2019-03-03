import React from 'react';

import './BackDrop.css';

const backdrop = (props) => (props.show ? <div className="Backdrop" onClick={props.hideSignUpBack} /> : null);

export default backdrop;
