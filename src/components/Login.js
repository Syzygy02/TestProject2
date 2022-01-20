import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return <div className='min-h-screen flex items-center justify-center bg-blue-200'>
    <div className='p-4 w-1/4 rounded-lg shadow-lg bg-white'>

      <h2 className='font-bold text-3xl text-blue-700 text-center'>LOG IN</h2>

      <form className='space-y-4 px-4 pt-4 pb-2 text-sm'>

        <input
          className='w-full py-2 px-4 border border-gray-300 rounded-lg'
          placeholder='Username...'
          type='text'
          value={user.username}
          name='username'
          onChange={(e) => handleChange(e)}
        />

        <input
          className='w-full py-2 px-4 border border-gray-300 rounded-lg'
          placeholder='Password...'
          type='password'
          value={user.password}
          name='password'
          onChange={(e) => handleChange(e)}
        />

        <button
          className='w-full rounded-lg bg-blue-600 text-white p-2 transition duration-500 hover:bg-blue-5'
          type='submit'
          onClick={(e) => handleLogin(e)}
        >log in</button>
      </form>
    </div>
  </div>
};

export default Login;
