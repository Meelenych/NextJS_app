'use client';
import Link from 'next/dist/client/link';
import React, { useState } from 'react';

const header = () => {
	const [logIn, setLogIn] = useState(false);

	return (
		<>
			<header className='sticky top-0 z-50'>
				<nav>
					<div className='navbar bg-base-100'>
						<ul className='flex-1 justify-around'>
							<li>
								<Link
									href='/'
									className='btn btn-ghost text-xl'>
									E-Store
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='link link-info p-1'>
									About our store
								</Link>
							</li>
							<li>
								<Link
									href='/products'
									className='link link-info p-1'>
									products
								</Link>
							</li>
							<li>
								<Link
									href='/cart'
									className='link link-info p-1'>
									cart
								</Link>
							</li>
							<li>
								<Link
									href='/signup'
									className='link link-info p-1'>
									signup
								</Link>
							</li>
						</ul>

						<div className='flex-none gap-2'>
							<div className='form-control'>
								<input
									type='text'
									placeholder='Search'
									className='input input-bordered w-24 md:w-auto'
								/>
							</div>

							{logIn && (
								<div className='dropdown dropdown-end'>
									<div
										tabIndex={0}
										role='button'
										className='btn btn-ghost btn-circle avatar'>
										<div className='w-10 rounded-full'>
											<img
												alt='Tailwind CSS Navbar component'
												src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
											/>
										</div>
									</div>
									<ul
										tabIndex={0}
										className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
										<li>
											<Link
												href='/account'
												className='link link-info p-1'>
												My account
											</Link>
										</li>
										<li>
											<Link
												href='/cart'
												className='link link-info p-1'>
												My order
											</Link>
										</li>
										<li>
											<Link
												href='/logout'
												className='link link-info p-1'>
												Log out
											</Link>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default header;