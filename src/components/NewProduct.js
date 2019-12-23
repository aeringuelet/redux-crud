import React, { useState } from 'react';

import { createNewProductAction } from '../actions/productsAction';
import { useDispatch } from 'react-redux';

const NewProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch();
    const addProduct = product => dispatch(createNewProductAction(product));

    const submitNewProduct = e => {
        e.preventDefault();

        addProduct({
            name, price
        });

        if(name.trim() === '' || price.trim() === '') {
            
            return;
        }

        setPrice('');
        setName('');
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Add new book</h2>
                        <form onSubmit={submitNewProduct}>
                            <div className="form-group">
                                <label>Book name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Book name"
                                    value={name}
                                    onChange={ e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Book price</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Book price"
                                    value={price}
                                    onChange={ e => setPrice(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Add</button>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProduct;