"use client"
import Link from 'next/link';
import React from 'react'
import { useState } from 'react'
import style from './styles.module.css'

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login Successfully!...", data);
      } else {
        const data = await response.json();
        setError(data.error || 'Login Failed');
      }
    } catch (error) {
      console.log("An error occurred during login.", error);
      setError("Something went wrong, please try again later!");
    }
    setLoading(false);
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-950'>
      <form onSubmit={handleLogin} className=' p-6 rounded w-1/3 ' id={style.login_frm}>
        <h1 className='font-bold text-2xl text-black mb-6'>Login</h1>
        {error && <p className='text-red-800 text-sm'>{error}</p>}
        <div className='mb-4'>
          <label htmlFor="email" className='block text-gray-700'>Email: </label>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type='email' 
            id='email' 
            className="w-full px-3 py-2 border rounded border-blue-500 caret-black" 
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="password" className='block text-gray-700'>Password: </label>
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            type='password' 
            id='password' 
            className="w-full px-3 py-2 border rounded border-blue-500 caret-black" 
          />
        </div>
        <Link href="/signUp" className='flex justify-end'>
          <span className='text-red-600 text-sm hover:text-red-400'>Don't have any account?</span>
        </Link>
        <button 
          type='submit' 
          className={`w-full bg-blue-500 text-white py-2 my-2 rounded hover:bg-blue-600 ${loading ? 'cursor-progress' :'cursor-pointer'}`}
        >
          {loading ? 'Login...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default Page;
