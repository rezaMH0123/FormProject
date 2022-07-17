import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SignFild from './SignFild'
import validate from './validate'
const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  })
  const [errors, setErrors] = useState({})
  const [touch, setTouch] = useState({})

  const notify = (type) => {
    if (type == 'success') {
      toast.success('Wow so easy!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast.error('Please fill in all the blanks', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const changeHandler = (event) => {
    if (event.target.name === 'isAccepted') {
      setData({ ...data, [event.target.name]: event.target.checked })
    } else {
      setData({ ...data, [event.target.name]: event.target.value })
    }
  }
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true })
  }
  const submitHndler = (event) => {
    event.preventDefault()
    if (!Object.keys(errors).length) {
      notify('success')
      console.log('rezaa')
    } else {
      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      })
      notify('error')
    }
  }
  useEffect(() => {
    setErrors(validate(data, 'signup'))
  }, [data, touch])
  return (
    <div className="text-center flex justify-center items-center bg-gray-200 h-screen">
      <form
        onSubmit={submitHndler}
        className="border border-gray-400 rounded-lg w-fit bg-white h-fit p-14"
      >
        <h2 className="font-bold text-4xl text-blue-500 text-left mb-6">
          signUp
        </h2>
        <SignFild
          type="text"
          name="name"
          value={data.name}
          onchange={changeHandler}
          errors={errors}
          touch={touch}
          onFocus={focusHandler}
        />
        <SignFild
          type="text"
          name="email"
          value={data.email}
          onchange={changeHandler}
          errors={errors}
          touch={touch}
          onFocus={focusHandler}
        />
        <SignFild
          type="password"
          name="password"
          value={data.password}
          onchange={changeHandler}
          errors={errors}
          touch={touch}
          onFocus={focusHandler}
        />
        <SignFild
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onchange={changeHandler}
          errors={errors}
          touch={touch}
          onFocus={focusHandler}
        />
        <div className="flex justify-center w-fit ml-4 mb-5">
          <label
            htmlFor="link-checkbox"
            className="mr-2  text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree all terms of privacy policy
          </label>
          <input
            id="link-checkbox"
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={changeHandler}
          />
        </div>
        <div className="text-left ml-4 mb-8 text-red-500">
          {errors.isAccepted && <span>{errors.isAccepted}</span>}
        </div>
        <Link to={'/signin'}>
          <div className="flex justify-between w-full">
            <a className="font-bold text-lg text-blue-500" href="#">
              LogIn
            </a>
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Sign Up
            </button>
          </div>
        </Link>
      </form>
      <ToastContainer />
    </div>
  )
}

export default SignUp
