import React from "react";
import { api } from "./config";

// tokenVerifier.js

export async function verifyToken() {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return false;
  }
  try {
    const response = await fetch(`${api.API_URL}/user/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    });
    const responseData = await response.json();
    if (responseData.code === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export async function getAllProducts() {
  try {
    const response = await fetch(`${api.API_URL}/products`, {
      method: "GET",
    });
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    return error;
  }
}


export async function getSingleProduct(productId){
  try {
    const response = await fetch(`${api.API_URL}/products/${productId}`);
    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; 
  }
}
