import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { getSingleProduct } from "../../API/api";
import Payment from "../payment";

const Product = () => {
  let { pathname } = useLocation();
  const [paymentId, setPaymentId] = useState('');

  const [singleProduct, setSingleProduct] = useState();
  const[backup,setBackup] = useState()

  function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }

  

  useEffect(() => {
    function getProductIdFromUrl() {
      const urlParts = window.location.pathname.split("/");
      const productId = urlParts[urlParts.length - 1];
      return productId;
    }

    const productId = getProductIdFromUrl();

    if (productId) {
      getSingleProduct(productId)
        .then((data) => {
          setSingleProduct(data);
          console.log(data);
          setBackup(data.backup)

        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    } else {
      console.error("Product ID not found in URL");
    }
  }, []);

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of ZIVON react minimalist eCommerce template."
      />

      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Buy Product", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        {/* product description with image */}
        <div className="container" style={{padding:"30px"}}>
          <div className="row">
            <div className="col-md-5">
              <img
                src={singleProduct && singleProduct.thumbnail}
                alt="Product"
                className="img-fluid"
              />
            </div>
            <div className="col-md-7">
              <div className=" justify-content-between align-items-center mb-2">
                <h2>  {singleProduct && singleProduct.title} </h2>
                <h4 className="text-black mb-0">  ₹ {singleProduct && singleProduct.price} <del className="text-danger" style={{fontSize:"12px"}}> ₹ { singleProduct && singleProduct.price + (singleProduct.price*10)/100} </del></h4>

              </div>
              <div  className=" justify-content-between align-items-center mb-2">
                  <ul>
                    <li> Warranty :- {singleProduct && singleProduct.warranty} months </li>
                    <li> Suitable for :- {singleProduct && singleProduct.category === "bike-battery" ? "Bikes" : singleProduct && singleProduct.category === "led-battery" ? "LED Lights" : singleProduct && singleProduct.category === "ups-battery" ? "UPS Use" : ""}  </li>
                    <li>{singleProduct && singleProduct.backup ? (`Backup:- ${singleProduct.backup} minutes`) : ""}</li>
                  </ul>
              </div>
              <p>
                <span className="text-black">Description:-</span> <br/>
                {singleProduct && singleProduct.description}
              </p>
              <button className="btn btn-success " >Buy Now</button>
              <button className="btn btn-primary m-2">Add to Cart</button>

            </div>
          </div>
        </div>

        {/* product description tab */}
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
