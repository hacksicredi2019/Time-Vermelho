import React from 'react';
import Button from '@material-ui/core/IconButton';
import { Link } from "@reach/router";
import logo from '../../src/logo.svg';

const SimpleModal = ({ exibeModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', color: "orange" }}>
        <h2 id="simple-modal-title">Obrigado por avaliar!</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '-10%' }}>
        <p id="simple-modal-description" style={{ fontSize: '5em' }}>
          😃
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 200 , marginLeft: "40%" }}>
        <img src={logo} alt="logo" />
      </div>
      <Button color="inherit" area-label="ver mais" style={{ position: 'absolute', bottom: 0, marginLeft: "40%" }} onClick={() => {}}>
        <Link to={`/`} style={{ textDecoration: 'none' }}>Home</Link>
      </Button>
    </div>
  );
}

export default SimpleModal;