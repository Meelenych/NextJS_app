import React from 'react';
import Link from 'next/link';

const footer = () => {
	return (
		<>
			<footer className='sticky bottom-0 flex flex-col sm:flex-row items-center justify-between p-4 bg-sky-600 text-neutral-content text-xs sm:text-base'>
				<aside className='flex items-center'>
					<Link href='/'>
						<svg
							width='36px'
							height='36px'
							viewBox='-1.5 0 13 13'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								id='Path_1'
								data-name='Path 1'
								d='M80.974,837h-10V825.969h1.989A2.023,2.023,0,0,1,75,824H76.88a2.021,2.021,0,0,1,2.042,1.969h2.052Zm-5-12.011c-1.374,0-2.015.339-2.033.98h4.035C77.961,825.368,77.207,824.978,75.974,824.989Zm4,2.011H78.926v.994h-.943V827H73.934v.994H72.96V827H71.943v9h8.031Z'
								transform='translate(-70.974 -824)'
								fill='#444'
							/>
						</svg>
					</Link>
					<p className='ml-2'>Copyright © 2024 - All right reserved</p>
				</aside>
				<nav className='flex justify-around w-4/5 p-3 sm:w-1/5'>
					<Link href='https://twitter.com/'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							className='fill-current'>
							<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
						</svg>
					</Link>
					<Link href='https://www.youtube.com/'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							className='fill-current'>
							<path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
						</svg>
					</Link>
					<Link href='https://www.facebook.com/'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							className='fill-current'>
							<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
						</svg>
					</Link>
				</nav>
				<p>&copy; 2024 Your E-Store. All rights reserved.</p>
			</footer>
		</>
	);
};

export default footer;
