import React, { useEffect, Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction, editedProductAction } from '../actions/productsAction';

const EditProduct = ({ match }) => {
    const dispatch = useDispatch();
    const { id } = match.params;

    const nameRef = useRef('');
    const priceRef = useRef('');

    useEffect(() => {
        dispatch(editProductAction(id));
    }, [ dispatch, id ]);

    const error = useSelector(state => state.products.error)
    const product = useSelector(state => state.products.product);

    if(!product) return "Loading...";
    
    const editProductSubmit = e => {
        e.preventDefault();

        dispatch(editedProductAction({
            id,
            name: nameRef.current.value,
            price: priceRef.current.value
        }));
    }

    return (
        <Fragment>
            {error ? 
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                    There was an error please try again
                </div> 
                
            :
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Edit Product</h2>
                                <form
                                    onSubmit={editProductSubmit}
                                >
                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Name"
                                            defaultValue={product.name}
                                            ref={nameRef}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Product Price</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Price" 
                                            defaultValue={product.price}
                                            ref={priceRef}
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                    >
                                        Save changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
}
 
export default EditProduct;