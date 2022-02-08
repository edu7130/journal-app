import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useSelector } from 'react-redux';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';



export const LoginScreen = () => {

  const { msgError, loading } = useSelector(state => state.ui);
  const dispatch = useDispatch()

  const [{ email, password }, handleInputChange] = useForm({
    email: 'business_edu@outlook.com',
    password: '123456'
  })


  const handleLogin = (e) => {
    e.preventDefault();
    if (isValidForm()) dispatch(startLoginEmailPassword(email, password))
  }

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin())
  }

  const isValidForm = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError('Invalid Email'));
      return false;
    } else if (password.length < 6) {
      dispatch(setError('Password must be 6 characters'));
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h1 className='auth__title'>Login</h1>
      <form onSubmit={handleLogin}>
        
        {
          msgError &&
          <div className='auth__alert-error'>
            {msgError}
          </div>
        }
        
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
        <button
          className='btn btn-primary btn-block'
          type='submit'
          disabled={loading}
        >
          Login
        </button>

        <div className='auth__social-networks'>
          <p>Login with social networks</p>
          <div
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link
          to='/auth/register'
          className='link'
        >
          Create new account
        </Link>
      </form>
    </>
  );
};
