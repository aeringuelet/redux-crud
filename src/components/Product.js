import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ data }) => {
    return (
        <tr>
            <td>{data.name}</td>
            <td><span className="font-weight-bold">$ {data.price}</span></td>
            <td className="acciones">
                <Link 
                    to={`/products/edit/${data.id}`} 
                    className="btn btn-primary mr-2"
                >
                    Edit
                </Link>
                <button className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    );
}
 
export default Product;