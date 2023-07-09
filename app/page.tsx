import { addProductToDatabase, submitImage } from '@/actions/serverActions';
import { baseUrl } from '../constants';
import { Product } from '../types';
import AddProductButton from '@/components/AddProductButton';

export default async function Home() {
	const response = await fetch(`${baseUrl}/products`, {
		cache: 'no-cache',
		next: {
			tags: ['products'],
		},
	});

	const products: Product[] = await response.json();

	return (
		<main>
			<h1 className='text-3xl font-bold text-center p-5'>
				Products Warehouse
      </h1>
      
      <AddProductButton />
			<form
				action={addProductToDatabase}
				className='flex flex-col gap-5 max-w-xl mx-auto p-5'>
				<input
					name='product'
					type='text'
					className='border border-gray-300 p-2 rounded-md'
					placeholder='Enter Product Name...'
				/>
				<input
					name='price'
					type='text'
					className='border border-gray-300 p-2 rounded-md'
					placeholder='Enter Product Price...'
        />
        {/* <input type="image" formAction={submitImage}/> */}
				<button className='border bg-blue-500 text-white p-2 rounded-md'>
					Add Product
				</button>
			</form>

			<h1 className='font-semibold p-5'>List of our Products</h1>
			<div className='flex flex-wrap gap-5 mx-5'>
				{products &&
					products.map((product) => (
						<div
							key={product.id}
							className='p-5 shadow rounded-md w-[12.5%]'>
							<p className='font-medium text-center'>
								{product.product}
							</p>
							<p className='text-gray-500 font-light text-center mt-0.5 text-sm'>
								€{Number(product.price).toFixed(2)}
							</p>
						</div>
					))}
			</div>
		</main>
	);
}
