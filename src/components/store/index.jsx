import "./store.scss";
const Store = ({ img, text }) => {
  return (
    <>
      <button className="store">
        <div className="store-img">
          <img src={img} alt="" />
        </div>
        {text}
      </button>
    </>
  );
};
export default Store;
