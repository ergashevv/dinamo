import bycycle from "../../assets/images/bycycle.png";
import "./banner.scss";
const Banner = () => {
  return (
    <>
      <div className="container-xxl">
        <div className="banner-all">
          <div className="container-xl">
            <div className="banner">
              <div className="banner-left">
                <h1>В «Динамо» стартовал сезон осенних акций</h1>
                <button>Подробнее</button>
              </div>
              <div className="banner-right">
                <img src={bycycle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
