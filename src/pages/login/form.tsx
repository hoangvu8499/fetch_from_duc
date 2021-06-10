import InputForm from 'components/form/inputForm'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { RootState } from 'store/interface'
import { loginRequest } from 'store/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { LoginInputs } from './form.d'

const FormLogin: React.FC = () => {
  const loading = useSelector((state: RootState) => state.auth.loading)
  const error = useSelector((state: RootState) => state.auth.error)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>()
  const dispatch = useDispatch()
  const { username, password } = errors || {}
  const handleSubmitForm = (data: LoginInputs) => {
    const { password, username } = data
    dispatch(loginRequest({ username, password }))
  }
  return (
    <>
      {error && (
        <div className='invalid-feedback d-block'>
          <p>❌ Login failed! Please check your account!</p>
        </div>
      )}
      <form className='pt-3 needs-validation' onSubmit={handleSubmit(handleSubmitForm)}>
        <div className='form-group'>
          <InputForm
            isInvalid={!!username}
            placeholder='Username'
            fieldError='Username is required!'
            {...register('username', { required: true })}
          />
        </div>
        <div className='form-group'>
          <InputForm
            isInvalid={!!password}
            placeholder='Password'
            fieldError='Password is required!'
            {...register('password', { required: true })}
            type='password'
          />
        </div>
        <div className='mt-3'>
          <button
            className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
            type='submit'
            disabled={loading}
          >
            SIGN IN
        </button>
        </div>
        <div className='my-2 d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <label className='form-check-label text-muted'>
              <input
                type='checkbox'
                className='form-check-input'
                style={{
                  opacity: 1,
                  width: '18px',
                  height: '18px',
                }}
              />
            Keep me signed in
          </label>
          </div>
          <Link to='#' className='auth-link text-black'>
            Forgot password?
          </Link>
        </div>
        <div className='mb-2'>
          <button
            type='button'
            className='btn btn-block btn-facebook auth-form-btn'
          >
            <i className='ti-facebook mr-2'></i>Connect using facebook
        </button>
        </div>
        <div className='text-center mt-4 font-weight-light'>
          Don't have an account?{' '}
          <Link to='/register' className='text-primary'>
            Create
        </Link>
        </div>
      </form>
    </>
  )
}

export default FormLogin
