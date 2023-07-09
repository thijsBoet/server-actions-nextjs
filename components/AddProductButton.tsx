'use client';

import { addProductToDatabase } from '@/actions/serverActions';
import { useTransition } from 'react';

const AddProductButton = () => {
	const [isPending, startTransition] = useTransition();

	const formData = new FormData();
	formData.append('product', 'Imac 27');
	formData.append('price', '1299.99');

	return (
		<button
			onClick={() =>
				startTransition(() => addProductToDatabase(formData))
			}
			disabled={isPending}
			className='fixed bottom-10 right-10 bg-green-500 text-white p-2 rounded-md w-48'>
			{isPending ? 'Adding...' : 'Add Imac 27'}
		</button>
	);
};

export default AddProductButton;
