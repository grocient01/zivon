import PropTypes from "prop-types";
import clsx from "clsx";
import ProductgridList from "./ProductgridList";
import { FaCartShopping } from "react-icons/fa6";

const ShopProducts = ({ products, layout }) => {
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
  return (
    <div className="container">
      <section>
        <div className="container py-5">
          <div className="row">
            {data &&
              data.map((item, index) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4 mb-md-0 ">
                  <div className="card" style={{marginBottom:"20px"}}>
                    <div className="d-flex justify-content-between p-3">
                      <p className="lead mb-0">Today's Combo Offer</p>
                      <div
                        className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <p className="text-white mb-0 small">x3</p>
                      </div>
                    </div>
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt="Gaming Laptop"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="small">
                          <a href="#!" className="text-muted">
                            {item.subType}
                          </a>
                        </p>
                        <p className="small text-danger">
                          <s> ₹ {item.Price} </s>
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0"> {item.title} </h5>
                        <h5 className="text-black mb-0"> ₹ {item.Price}</h5>
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
                          Available: <span className="fw-bold">5</span>
                        </p>
                        
                      </div>

                      <div className="d-flex  mb-3">
                          <button className="btn btn-success ">Buy Now</button>
                          <button className="btn btn-primary mx-2"> <FaCartShopping /> </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};



export default ShopProducts;
