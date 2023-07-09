'use server';
import { revalidateTag } from 'next/cache';
import { baseUrl } from '../constants';
import { Product } from '../types';

export const addProductToDatabase = async (e: FormData) => {
	const product = e.get('product')?.toString();
	const price = e.get('price')?.toString();

	if (!product || !price) return;

	const newProduct: Product = {
		product,
		price,
	};

	await fetch(`${baseUrl}/products`, {
		method: 'POST',
		body: JSON.stringify(newProduct),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	revalidateTag('products');
};

export const submitImage = async (e: FormData) => {

}