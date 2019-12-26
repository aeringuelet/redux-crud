import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsAction } from "../actions/productsAction";
import Product from "./Product";

const Products = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const loadProducts = () => dispatch(getProductsAction());
		loadProducts();
	}, [ dispatch ]);

	const loading = useSelector(state => state.products.loading);
	const error = useSelector(state => state.products.error);
	const products = useSelector(state => state.products.products);

	return (
		<React.Fragment>
			{error 
			? 
				<React.Fragment>
					<div className="alert-danger alert text-center mt-4 font-weight-bold">
						Error trying to get products from API
					</div> 
				</React.Fragment>
			: 
				<React.Fragment>
					<h2 className="text-center my-5">Products</h2>
	
					<table className="table table-striped">
						<thead className="bg-primary table-dark">
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Price</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
							{products.map(prod => (
								<Product 
									key={prod.id}
									data={prod}
								/>
							))}
						</tbody>
					</table>
	
					{loading ? <p>Loading...</p> : null}
				</React.Fragment>
			}
		</React.Fragment>
	);
};

export default Products;
