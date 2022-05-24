import React from 'react';
import Form from '../Form';
import logo from '@/assets/images/logo.jpg';

import styled from 'styled-components';

const FormBootstrapContent = styled.div`
  img {
    object-fit: cover;
  }
  .card-img-top {
    max-width: 10rem;
    height: 10rem;
  }
  .bussines h2 {
    font-size: rem;
  }
`;

const FormBootstrap = () => {
  return (
    <FormBootstrapContent className="container d-flex justify-content-center">
      <div style={{ width: '18rem' }}>
        <div className="container d-flex justify-content-center">
          <img
            className="card-img-top"
            src={logo}
            alt="logo - consigue ventas"
          />
        </div>
        <div className="bussines">
          <h2>CONSIGUE VENTAS</h2>
          <p>AGENCIA DE EMBUDO DE VENTAS ONLINE</p>
        </div>
        <Form />
      </div>
    </FormBootstrapContent>
  );
};

export default FormBootstrap;
