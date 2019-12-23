import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productsAction";
import Swal from "sweetalert2";

const Product = ({ data }) => {
	const dispatch = useDispatch();

	const deleteProd = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then(result => {
            if (result.value) {
                dispatch(deleteProductAction(data.id));
                Swal.fire(
                    "Deleted!", 
                    "The product has been deleted.", 
                    "success"
                );
			}
        });
        
	};

	return (
		<tr>
			<td>{data.name}</td>
			<td>
				<span className="font-weight-bold">$ {data.price}</span>
			</td>
			<td className="acciones">
				<Link
					to={`/products/edit/${data.id}`}
					className="btn btn-primary mr-2"
				>
					Edit
				</Link>
				<button className="btn btn-danger" onClick={() => deleteProd()}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Product;
