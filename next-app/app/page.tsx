import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<header>
				<nav>
					<div className='navbar bg-base-100'>
						<div className='flex-1'>
							<Link
								href='/'
								className='btn btn-ghost text-xl'>
								E-Commerce Store
							</Link>
						</div>
						<div className='flex-none gap-2'>
							<div className='form-control'>
								<input
									type='text'
									placeholder='Search'
									className='input input-bordered w-24 md:w-auto'
								/>
							</div>
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
										<a className='justify-between'>
											Profile
											<span className='badge'>New</span>
										</a>
									</li>
									<li>
										<a>Settings</a>
									</li>
									<li>
										<a>Logout</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<ul>
						<li>
							<Link href='/404'>404</Link>
						</li>
						<li>
							<Link href='/account'>account</Link>
						</li>
						<li>
							<Link href='/admin'>admin</Link>
						</li>
						<li>
							<Link href='/cart'>cart</Link>
						</li>
						<li>
							<Link href='/checkout'>checkout</Link>
						</li>
						<li>
							<Link href='/login'>login</Link>
						</li>
						<li>
							<Link href='/order'>order</Link>
						</li>
						<li>
							<Link href='/products'>products</Link>
						</li>
						<li>
							<Link href='/search'>search</Link>
						</li>
						<li>
							<Link href='/signup'>signup</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section>
					<h1>Welcome to Our E-Commerce Store</h1>
					<p>Discover amazing products and enjoy a seamless shopping experience.</p>
				</section>
				<section>
					<h2>Featured Products</h2>
					{/* Display featured products here */}
				</section>
				<section>
					<h2>Explore Now</h2>
					<p>Find the perfect products for you.</p>
					<Link href='/products'>products</Link>
				</section>
			</main>
			<footer>
				<p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
			</footer>
		</div>
	);
}
