"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import style from './styles.module.css'

export default function signUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Ensure the URL matches your API routejjju
    const res = await fetch('/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });

    // Handle response
    const data = await res.json();

    if (res.ok) {
      setSuccess(data.message);
      setTimeout(() => {
        router.push('/');
      }, 2000); // Redirect to sign-in page after 2 seconds
    } else {
      setError(data.error);
    }
  };

  return (
    <>
    {/* <Navbar/> */}
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <form onSubmit={handleSignup} className="p-6 rounded w-1/3" id={style.login_frm}>
        <h1 className="text-2xl font-bold mb-6 text-black">Sign Up</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded border-blue-500"
          />
        </div>
        <Link href="/signUp" className='flex justify-end mb-1'>
          <span className='text-red-600 text-sm hover:text-red-400'>Already have account?</span>
        </Link>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
    </>
  );
}
