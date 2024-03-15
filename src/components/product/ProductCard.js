import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { getAllProducts } from "../../API/api";

export default function ProductCard() {
  const[fatching,setFatching] = useState(true)
  const data = [
    {
      id: 1,
      img: "/assets/img/product/product-1.png",
      title: "CRANKING BATTERIES",
      type: "battery",
      subType: "Bike Battery",
      Price: 1200,
      rating: 5,
      stock: 50,
    },
    {
      id: 2,
      img: "/assets/img/product/product-2.png",
      type: "battery",
      title: "CRANKING BATTERIES 2",
      subType: "Bike Battery",
      Price: 1180,
      rating: 5,
      stock: 50,
    },
    {
      id: 3,
      img: "/assets/img/product/product-3.png",
      title: "CRANKING BATTERIES 3",
      type: "battery",
      subType: "Bike Battery",
      Price: 1485,
      rating: 5,
      stock: 50,
    },
    {
      id: 1,
      img: "/assets/img/product/product-3.png",
      title: "CRANKING BATTERIES",
      type: "battery",
      subType: "Bike Battery",
      Price: 1560,
      rating: 5,
      stock: 50,
    },
    {
      id: 5,
      img: "/assets/img/product/product-1.png",
      type: "battery",
      title: "CRANKING BATTERIES 2",
      subType: "Bike Battery",
      Price: 1440,
      rating: 5,
      stock: 50,
    },
    {
      id: 6,
      img: "/assets/img/product/product-3.png",
      title: "CRANKING BATTERIES 3",
      type: "battery",
      subType: "Bike Battery",
      Price: 1750,
      rating: 5,
      stock: 50,
    },
  ];

  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    setFatching(true)
    getAllProducts()
      .then((data) => {
        
        if(data.length >0){
          setAllProducts(data);
        setFatching(false)
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="container">
      <section>
        <div className="container py-5">
          <div className="row">
            {fatching ? "Loading Products.." : (allProducts &&
              allProducts.map((item, index) => (
                <div className="col-md-6 col-lg-4 mb-4 mb-md-0 ">
                  <div className="card" style={{ marginBottom: "20px", backgroundColor:"#daedff" }}>
                    <div className="d-flex justify-content-between p-3">
                      <p className="lead mb-0"> {" "} </p>
                      <div
                        className="bg-info  d-flex align-items-center justify-content-center shadow-1-strong"
                        // style={{ width: "37px", height: "37px" }}
                        style={{padding:"5px", borderRadius:"5px"}}
                      >
                        <h5 className=" mb-0 " style={{fontWeight:"700"}}> {item.volt}v { " -"} <span className="">{item.ah}Ah</span> </h5>
                      </div>
                    </div>
                    <img
                      src={item.thumbnail}
                      className="card-img-top"
                      alt="Gaming Laptop"
                      style={{width:"70%", margin:"auto"}}
                    />
                    <div className="card-body">
                      

                      <div className=" justify-content-between mb-3">
                        <h4 className="mb-0"> {item.title} </h4>
                        <h4 className="text-black mb-0">  ₹ {item.price} <del className="text-danger" style={{fontSize:"12px"}}> ₹ {item.price + (item.price*10)/100} </del></h4>
                        <h5 className="mt-4">  <span className="h4" style={{fontWeight:"700"}}>{item.warranty}</span> months warranty</h5>
                      </div>

                      <div className="d-flex mb-1 text-warning">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <p className="text-muted mb-0">
                          Available <span className="fw-bold"></span>
                        </p>
                      </div>

                      <div className="d-flex  mb-3">
                      <a href={`/product/${item._id}`} className="btn btn-success">Buy Now</a>
                        <button className="btn btn-primary mx-2">
                          {" "}
                          <FaCartShopping />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )))}
          </div>
        </div>
      </section>
    </div>
  );
}
