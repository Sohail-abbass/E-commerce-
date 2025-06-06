import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ShopCategory.css";
import { Item } from "../Components/Item/Item";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import ImageGrid from "../Components/ImageGrid/ImageGrid";
// It receives banner as a prop (men_banner).
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // It receives banner as a prop (men_banner).
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 30 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
         <div className="shopcategory-loadmore"> 
          Explore more
        </div> 
        <ImageGrid/>
      </div>
    </div>
  );
};
export default ShopCategory;


