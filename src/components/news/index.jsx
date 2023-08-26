import "./news.scss";
import SaleCard from "../salecard";
import ProductCardImg from "../../assets/images/productCard.png";

const News = () => {
    return (
        <>
            <div className="container-xxl">
                <div className="container">
                    <div className="news">
                        <div className="news-title">
                            <h1>Новинки</h1>
                        </div>
                        <div className="news-cards">
                            <div className="news-cards-left">
                                <div className="left-card">
                                    <div className="left-card-text">
                                        <h1>Mужской браслет для поддержки запястья</h1>
                                        <button>Подробнее</button>
                                    </div>
                                </div>
                            </div>
                            <div className="news-cards-right">
                                <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                                <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                                <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                                <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                                <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                                <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                                <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                                <SaleCard img={ProductCardImg} title={"Перчатки Боксерские ФТБР"} newcost={"120.000 uzs"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default News;