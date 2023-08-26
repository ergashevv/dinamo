import { useState } from "react";
import { Arrow } from "../../assets/images/icons";
import "./salecard.scss";
const SaleCard = ({
  img,
  title,
  cost,
  newcost,
  saleCost,
  isLiked,
  setState,
  id,
}) => {
  const [cardId, setCardId] = useState();
  const [like, setLike] = useState(false);
  return (
    <>
      <div className="sale-card">
        <div className="sale-card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-text">
          <p>{title}</p>
          <div className="card-text-cost">
            <h1>{newcost}</h1>
            <p>{cost}</p>
            <button
              onClick={() => {
                setCardId(id);
                setLike(!like);
              }}
              onDoubleClick={() => setCardId(null)}
              style={{
                backgroundColor: cardId === id && like ? "red" : "gray",
              }}
            >
              like
            </button>
          </div>
          <button className="sale-card-btn">
            Добавить в корзинку <Arrow />
          </button>
        </div>

        <div className="sale-cost">
          <p>{saleCost}</p>
        </div>
      </div>
    </>
  );
};
export default SaleCard;
