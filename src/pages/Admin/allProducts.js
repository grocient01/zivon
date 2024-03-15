import React from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const AllProducts = () => {

  const product = [
    {
        id:1,
        imageUrl: "https://makerbazar.in/cdn/shop/products/Battery_9_Volt_600x.jpg?v=1633610448",
        name: "Zivon battery",
        stock: 50,
        price: 500
    },
    {
        id:2,
        imageUrl: "https://makerbazar.in/cdn/shop/products/Battery_9_Volt_600x.jpg?v=1633610448",
        name: "Zivon battery",
        stock: 40,
        price: 800
    },
    ]
  return (
    <div>
        <div className='container'>
            {product.map((item)=>(
                <div className='d-flex justify-content-between' style={{height:"60px"}}>
                    <div style={{height:"60px"}}> <img src={item.imageUrl} style={{height:"100%"}}/> </div>
                    <div> {item.name} </div>
                    <div> ₹{item.price} </div>
                    <div> {item.stock} </div>
                    <div className='d-flex gap-2 mt-1'>
                        <MdDelete />
                        <FaEdit />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default AllProducts;
