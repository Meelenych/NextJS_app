import Link from 'next/link';
import React from 'react';

const signupPage = () => {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl font-bold text-center'>Sign up or login</h1>
			<form
				action='submit'
				className='grid grid-cols-1 gap-4'>
				<input
					className='input input-bordered input-primary w-full max-w-xs'
					type='text'
					name=''
					id=''
				/>
				<input
					className='input input-bordered input-primary w-full max-w-xs'
					type='number'
					name=''
					id=''
				/>
				<input
					className='input input-bordered input-primary w-full max-w-xs'
					type='email'
					name=''
					id=''
				/>
				<input
					className='input input-bordered input-primary w-full max-w-xs'
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
			<div className='flex justify-center'>
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
				className='btn btn-ghost'>
				Log in
			</Link>
		</div>
	);
};

export default signupPage;
