import "./brendcard.scss";

const BrendCard = ({ img }) => {
  return (
    <>
      <div className="brend-card">
        <img src={img} alt="brend" />
      </div>
    </>
  );
};
export default BrendCard;
