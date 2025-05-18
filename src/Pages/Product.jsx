// import React from 'react'

import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";
const Product = () => {
  const {all_product,apiproducts}=useContext(ShopContext);
  const {productId} =useParams();
  // find the match product and convert the string into number
  const numericId = Number(productId);
  const product =
    all_product.find((e) => e.id === numericId) ||
    apiproducts.find((e) => e.id === numericId);

  return (
    <div>

      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}
export default Product
