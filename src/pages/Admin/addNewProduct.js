import React, { useState } from 'react';

function AddNewProduct() {
    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        stock: '',
        description: '',
        highlights: '',
        type: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can send the formData to your backend or perform any other action
    };

    return (
        <div>
            <h2 style={{marginTop:"40px"}}>Add New Product</h2>
            <form onSubmit={handleSubmit} style={{width:"50%"}}>
                <div>
                    <label>Product Name:</label>
                    <input type="text" name="productName" value={formData.productName} onChange={handleChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                </div>
                <div>
                    <label>Stock:</label>
                    <input type="text" name="stock" value={formData.stock} onChange={handleChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Highlights:</label>
                    <textarea name="highlights" value={formData.highlights} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Type:</label>
                    <input type="text" name="type" value={formData.type} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddNewProduct;
