import productImage from '../images/productImage.jpg'
import "./index.css";

const ProductCard = () => {
    return (
        <div>
           <img src={productImage} alt="product" className="product-img"/>
        </div>
    )
}

export default ProductCard