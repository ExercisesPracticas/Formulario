import React from 'react';
import useForm from './hooks/useForm';


const Form = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='d-2' htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          required={true}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
      <label htmlFor="email">Email</label>
        <input
        id='email'
          type="email"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          required={true}
          onChange={handleInputChange}
        />
      {/* <small className="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small> */}
      </div>
      <div className="form-group">
      <label htmlFor="password">Password</label>
        <input
        id='password'
          type="password"
          name="password"
          className="form-control"
          placeholder="Tu Password"
          autoComplete="off"
          value={password}
          required={true}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default Form;
