import SaleCard from "../salecard";
import ProductCardImg from "../../assets/images/productCard.png";
import "./products.scss";
import { LeftArrow, RightArrow } from "../../assets/images/icons";
const Products = () => {
    return (
        <>
            <div className="container-xxl">
                <div className="products">
                    <div className="products-title container">
                        <h1>Популярные товары</h1>
                    </div>
                    <div className="products-cards">
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                        <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                    </div>
                    <div className="product-buttons container">
                        <button className="left-btn"><LeftArrow /></button>
                        <button className="right-btn"><RightArrow /></button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Products;