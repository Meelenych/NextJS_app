import Link from 'next/link';
import React from 'react';

const signupPage = () => {
	return (
		<div className='flex flex-col items-center content-center mt-3 sm:mt-10 lg:mt-20'>
			<h1 className='text-3xl font-bold text-center'>Sign up here</h1>
			<form
				action='submit'
				className='w-80 grid grid-cols-1 col-span-2 gap-4 m-4'>
				<input
					className='input input-bordered input-primary w-full max-w-xl'
					type='text'
					name=''
					id=''
					placeholder='Name Surname'
				/>
				<input
					className='input input-bordered input-primary w-full max-w-xl'
					type='text'
					name=''
					id=''
					placeholder='+1 111 111 1111'
				/>
				<input
					className='input input-bordered input-primary w-full max-w-xl'
					type='email'
					name=''
					id=''
				/>
				<input
					className='input input-bordered input-primary w-full max-w-xl'
					type='password'
					name=''
					id=''
				/>
				<button
					type='button'
					className='btn btn-active btn-accent'>
					Sign Up
				</button>
			</form>
			<div className='w-80 grid grid-cols-2 gap-4 mb-4'>
				<Link
					href='/login'
					className='btn btn-success btn-outline'>
					Google
				</Link>
				<Link
					href='/login'
					className='btn btn-outline'>
					GitHub
				</Link>
			</div>

			<Link
				href='/login'
				className='btn btn-secondary btn-outline w-80'>
				Log in page
			</Link>
		</div>
	);
};

export default signupPage;
