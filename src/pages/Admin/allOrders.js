import React from "react";
import { Col, Image, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const AllOrders = () => {
  const product = [
    {
      id: 2,
      imageUrl: "https://5.imimg.com/data5/CY/HS/VU/SELLER-743647/exide-inverter-battery.jpeg",
      name: "Zivon Bike battery",
      price: 1000,
      quantity: 2,
      user: "Hemant",
      orderDate: "22-03-2024",
      paymentMode: "ONLINE",
      status: "Delivered"
    },
    {
      id: 2,
      imageUrl:
        "https://makerbazar.in/cdn/shop/products/Battery_9_Volt_600x.jpg?v=1633610448",
      name: "Zivon battery",
      price: 800,
      quantity: 1,
      user: "Karan",
      orderDate: "24-03-2024",
      paymentMode: "COD",
      status: "Pending"
    },
  ];
  return (
    <div>
      <div className="container" style={{marginTop:"30px"}}>
        {product.map((item, index) => (
          <div
          className={`d-flex justify-content-between ${index % 2 === 0 ? 'bg-light' : 'bg-white'}`}
            style={{ height: "60px" }}
          >
            <div> {index+1} </div>
            <div style={{ height: "60px" }}>
              {" "}
              <img src={item.imageUrl} style={{ height: "100%" }} />{" "}
            </div>
            <div> {item.name} </div>
            <div> {item.user} </div>
            <div> ₹{item.price} </div>
            <div> {item.quantity} </div>
            <div> {item.paymentMode} </div>
            <div> {item.orderDate} </div>
            <div> {item.status} </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
