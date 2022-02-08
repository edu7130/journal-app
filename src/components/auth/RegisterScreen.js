import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const { msgError, loading } = useSelector(state => state.ui)
  const dispatch = useDispatch()

  const [{ name, email, password, password2 }, handleInputChange] = useForm({
    name: 'Hernando',
    email: 'business_edu@outlook.com',
    password: '123456',
    password2: '123456'
  })
  //  const { name, email, password, password2 } = formValues

  const handleRegister = (e) => {
    e.preventDefault()

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(email, password))
    }
  }


  const isFormValid = () => {
    if (name.trim().length === 0) {

      dispatch(setError('Invalid Name'))
      return false;

    } else if (!validator.isEmail(email)) {

      dispatch(setError('Invalid Email'))
      return false;

    }
    else if (password !== password2 || password.length < 5) {

      dispatch(setError('Password should be 6 characters'))
      return false;

    }
    dispatch(removeError())
    return true
  }


  return (
    <>
      <h1 className='auth__title'>Register</h1>
      <form onSubmit={handleRegister}>

        {
          msgError &&
          <div className='auth__alert-error'>
            {msgError}
          </div>
        }
        <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}

        />

        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}

        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder='Confirm'
          name='password2'
          className='auth__input'
          value={password2}
          onChange={handleInputChange}
        />

        <button
          className='btn btn-primary btn-block mb-5'
          type='submit'
        >
          Register
        </button>

        <Link
          to='/auth/login'
          className='link'
        >
          Already have an account?
        </Link>
      </form>
    </>
  );
};
